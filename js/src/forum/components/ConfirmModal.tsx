import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import User from "flarum/common/models/User";
import app from "flarum/admin/app";
import avatar from "flarum/common/helpers/avatar";
function _trans(key: string, ...params: any) {
    return app.translator.trans(`xypp-invite-user.forum.confirm.${key}`, ...params);
}
export default class ConfirmModal extends Modal<{
    code: string,
    user: User
} & IInternalModalAttrs> {
    className(): string {
        return "Modal Modal--small"
    }
    title() {
        return _trans("title")
    }
    content() {
        return <div className="Modal-body">
            <div className="confirm-invite-user-avatar">
                {avatar(this.attrs.user, { className: "confirm-invite-avatar" })}
            </div>
            <div className="confirm-invite-name">
                {this.attrs.user.displayName()}
            </div>
            <div className="confirm-invite-msg">
                {_trans("msg", { user: this.attrs.user.displayName() })}
            </div>
            <div className="confirm-invite-code">{this.attrs.code}</div>
            <div className="confirm-invite-btn">
                <button className="Button Button--primary" onclick={() => {
                }}>
                    {_trans("accept")}
                </button>
            </div>
        </div>
    }

}