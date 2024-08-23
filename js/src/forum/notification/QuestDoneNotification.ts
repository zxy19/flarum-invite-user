import Notification, { INotificationAttrs } from 'flarum/forum/components/Notification';
import username from 'flarum/common/helpers/username';
import app from 'flarum/forum/app';
import InvitedUser from '../../common/model/InvitedUser';
import User from 'flarum/common/models/User';

export default class UserInvitedNotification extends Notification<any> {
    excerpt() {
        return ""
    }
    icon() {
        return 'fas fa-user-check';
    }

    href() {
        return app.route("user_invited");
    }

    content() {
        const user: User = this.attrs.notification.user();
        const subject: InvitedUser = this.attrs.notification.subject();
        return app.translator.trans('xypp-invite-user.forum.notification.user_invited', { username: user.displayName() });
    }
}