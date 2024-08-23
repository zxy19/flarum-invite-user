import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import User from "flarum/common/models/User";
import app from "flarum/forum/app";
import avatar from "flarum/common/helpers/avatar";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import InviteCode from "../../common/model/InviteCode";
import InvitedUser from "../../common/model/InvitedUser";
import Button from "flarum/common/components/Button";
import Alert from "flarum/common/components/Alert";
function _trans(key: string, ...params: any) {
    return app.translator.trans(`xypp-invite-user.forum.confirm.${key}`, ...params);
}
export default class ConfirmModal extends Modal<{
    code: InviteCode,
} & IInternalModalAttrs> {
    loading: boolean = false;
    className(): string {
        return "Modal Modal--small"
    }
    title() {
        return _trans("title")
    }
    content() {
        const code = this.attrs.code;
        const user: User | undefined = this.attrs.code.user() || undefined;
        return <div className="Modal-body confirm-invite-container">
            <div className="confirm-invite-user-avatar">
                {avatar(user || null, { className: "confirm-invite-avatar" })}
            </div>
            <div className="confirm-invite-name">
                {user?.displayName()}
            </div>
            <div className="confirm-invite-msg">
                {_trans("msg", { username: user?.displayName() })}
            </div>
            <br />
            <div className="confirm-invite-alert">
                {_trans("alert")}
            </div>
            <div className="confirm-invite-btn">
                <Button className="Button Button--primary" onclick={this.confirm.bind(this)} disabled={this.loading} loading={this.loading}>
                    {_trans("accept")}
                </Button>
            </div>
            <br />
            <div className="confirm-invite-code">{code.code()}</div>
        </div>
    }
    async confirm() {
        const user = app.store.createRecord<InvitedUser>("invited-users");
        const invitedBy = this.attrs.code.user() as User;
        if (!app.session?.user) {
            return;
        }
        this.loading = true;
        m.redraw();
        try {
            await user.save({
                invited_by_user_id: invitedBy.id()
            });
        } catch (e) {
            this.loading = false;
            m.redraw();
            return;
        }
        app.alerts.show(Alert, { type: "success" }, _trans("success"));
        app.modal.close();
    }
}