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
import { showIf } from '../utils/nodeUtil';
import { processInviteCode } from '../utils/inviteCodeUtil';
import ConfirmModal from './ConfirmModal';
import Placeholder from 'flarum/common/components/Placeholder';
import humanTime from 'flarum/common/helpers/humanTime';
import Alert from 'flarum/common/components/Alert';
function _trans(key: string, ...params: any) {
    return app.translator.trans(`xypp-invite-user.forum.page.${key}`, ...params);
}
export class InvitePage extends UserPage {
    loading: boolean = false;
    url: string = '';
    queryCode: boolean = false;
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
                include: 'invitedUsers,invitedUsers.user,invitedByUser,invitedByUser.inviter',
            })
            .then(async () => {
                this.loading = false;
                this.url = app.forum.attribute("baseUrl") + "?inviteCode=" + (app.forum.inviteCode() || undefined)?.code();
                m.redraw();
            });
    }
    content(): JSX.Element {
        if (!this.user || this.loading) {
            return <LoadingIndicator size={46} />;
        }
        return (
            <div className="invite-page-container">
                {showIf(app.session?.user?.id() === this.user.id(),
                    <div>
                        <h2>{_trans("code.title")}</h2>
                        <div className="Form-group">
                            <label for="xypp-invite-code">{_trans("code.code")}</label>
                            <input readonly id="xypp-invite-code" type="text" className='FormControl' value={app.forum.inviteCode()?.code()} />
                        </div>
                        <div className="Form-group">
                            <label for="xypp-invite-url">{_trans("code.url")}</label>
                            <input readonly id="xypp-invite-url" type="text" className='FormControl' value={
                                app.forum.attribute("baseUrl") + "?inviteCode=" + app.forum.inviteCode()?.code()
                            } />
                        </div>
                    </div>
                )}
                <div className='invite-page-my'>
                    <h2>{_trans("my.title")}</h2>
                    {
                        showIf(!!(this.user.invitedByUser()),
                            (() => [
                                <div>
                                    <label for="xypp-invite-code-input">{_trans("my.inviter")}</label>
                                </div>,
                                <div>
                                    <Link className='invited-by-user-container' href={app.route.user(this.user?.invitedByUser()?.inviter() as User)}>
                                        {avatar(this.user?.invitedByUser()?.inviter() || null)}
                                        &nbsp;
                                        {username(this.user?.invitedByUser()?.inviter() || null)}
                                    </Link>
                                </div>
                            ]).bind(this)
                            ,
                            showIf(app.session?.user?.id() === (this.user.id() as string),
                                [
                                    <div className="Form-group">
                                        <label for="xypp-invite-code-input">{_trans("my.code")}</label>
                                        <input id="xypp-invite-code-input" type="text" className='FormControl' />
                                    </div>,
                                    <div className="Form-group">
                                        <Button disabled={this.queryCode}
                                            loading={this.queryCode}
                                            className="Button Button--primary"
                                            onclick={this.fillCode.bind(this)}>
                                            {_trans("my.accept")}
                                        </Button>
                                    </div>
                                ],
                                <Placeholder text={_trans("my.no-inviter")} />
                            )
                        )
                    }
                </div>
                <div className='invite-page-invited-users'>
                    <h2>{_trans("invite.title")}</h2>
                    {showIf(!!(this.user.invitedUsers()?.length),
                        <table className='Table'>
                            <thead>
                                <tr>
                                    <th>{_trans("invite.avatar")}</th>
                                    <th>{_trans("invite.username")}</th>
                                    <th>{_trans("invite.time")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(this.user.invitedUsers() || []).map((user) => (
                                    <tr key={user.id()}>
                                        <td>
                                            {avatar(user.user() || null)}
                                        </td>
                                        <td>
                                            <Link href={user.user() && app.route.user(user.user() as User)}>
                                                {username(user.user() || null)}
                                            </Link>
                                        </td>
                                        <td>
                                            {humanTime(user.created_at())}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        ,
                        <Placeholder text={_trans("invite.empty")} />
                    )}
                </div>
            </div>
        );
    }
    async fillCode() {
        this.queryCode = true;
        m.redraw();
        const code = this.$('#xypp-invite-code-input');
        try {
            const codeObj = await processInviteCode(code.val() as string);
            app.modal.show(ConfirmModal, { code: codeObj }, true);
        } catch (e: any) {
            app.alerts.show(Alert, { type: 'error' }, e.message);
        } finally {
            this.queryCode = false;
            m.redraw();
        }
    }
}