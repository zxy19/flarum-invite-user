import Mithril from 'mithril';
import UserPage from 'flarum/forum/components/UserPage';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import User from 'flarum/common/models/User';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import Link from 'flarum/common/components/Link';
import InviteCode from '../../common/model/InviteCode';
function _trans(key: string, ...params: any) {
    return app.translator.trans(`xypp-invite-user.forum.page.${key}`, ...params);
}
export class InvitePage extends UserPage {
    loading: boolean = false;
    url: string = '';
    oninit(vnode: any) {
        super.oninit(vnode);
        this.user = null;
        this.loading = true;
        this.loadUser(m.route.param('username'));
    }

    show(user: User) {
        super.show(user);
        this.user = user;

        app.store
            .find('users', user.id() + "", {
                include: 'invitedUsers,invitedUsers.user,inviteCode,invitedByUser,invitedByUser.user',
            })
            .then(async () => {
                this.loading = false;
                if (this.user?.inviteCode())
                    this.url = app.forum.attribute("baseUrl") + "?inviteCode=" + (this.user.inviteCode() || undefined)?.code();
                else {
                    const code = await new InviteCode().save({});
                    this.user?.pushData({
                        relationships: {
                            "inviteCode": code
                        }
                    });
                    m.redraw();
                }
                m.redraw();
            });
    }
    content(): JSX.Element {
        if (!this.user || this.loading) {
            return <LoadingIndicator size={46} />;
        }
        return (
            <div className="invite-page-container">
                <div>
                    <h2>{_trans("code.title")}</h2>
                    <div className="Form-group">
                        <label for="xypp-invite-code">{_trans("code.code")}</label>
                        <input readonly id="xypp-invite-code" type="text" className='FormControl' value={(this.user.inviteCode() || undefined)?.code()} />
                    </div>
                    <div className="Form-group">
                        <label for="xypp-invite-url">{_trans("code.url")}</label>
                        <input readonly id="xypp-invite-url" type="text" className='FormControl' value={this.url} />
                    </div>
                </div>
                <div>
                    <h2>{_trans("my.title")}</h2>
                    <div className="Form-group">
                        <label for="xypp-invite-url">{_trans("code.url")}</label>
                        <input readonly id="xypp-invite-url" type="text" className='FormControl' value={this.url} />
                    </div>
                    <div className="Form-group">
                        <Button className="Button Button--primary">
                            {_trans("code.copy")}
                        </Button>
                    </div>
                </div>
                <div>
                    <h2>{_trans("invite.title")}</h2>
                    <table className='Table'>
                        <thead>
                            <tr>
                                <th>{_trans("invite.avatar")}</th>
                                <th>{_trans("invite.username")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.user.invitedUsers() || []).map((user) => (
                                <tr key={user.id()}>
                                    <td>
                                        {avatar(user.user() || null)}
                                    </td>
                                    <td>
                                        <Link href={user.user() || app.route.user(user.user() as User)}>
                                            {username(user.user() || null)}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
