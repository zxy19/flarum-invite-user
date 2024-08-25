import app from 'flarum/forum/app';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import InvitedUser from '../common/model/InvitedUser';
import InviteCode from '../common/model/InviteCode';
import { extend, override } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';
import LinkButton from 'flarum/common/components/LinkButton';
import { InvitePage } from './components/InvitePage';
import Forum from 'flarum/common/models/Forum';
import ConfirmModal from './components/ConfirmModal';
import { processInviteCode } from './utils/inviteCodeUtil';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import UserInvitedNotification from './notification/UserInvitedNotification';
import PostMeta from 'flarum/forum/components/PostMeta';
import { addCondition } from '@xypp-forum-quests/forum'
function createWarpedModel<T>(call: () => T | false | null | undefined): () => (T | undefined) {
  return function (this: any) {
    return call.call(this) || undefined;
  };
}
function createWarpedModelArray<T>(call: () => (T | undefined)[] | false | null | undefined): () => (T[] | undefined) {
  return function (this: any) {
    return (call.call(this) || []).filter(v => !!v) as T[];
  };
}
app.initializers.add('xypp/flarum-invite-user', () => {
  User.prototype.invitedByUser = createWarpedModel(Model.hasOne<InvitedUser>('invitedByUser'));
  User.prototype.invitedUsers = createWarpedModelArray(Model.hasMany<InvitedUser>('invitedUsers'));
  Forum.prototype.inviteCode = createWarpedModel(Model.hasOne<InviteCode>('inviteCode'));
  Forum.prototype.invitation = createWarpedModel(Model.hasOne<InviteCode>('invitation'));
  app.routes['user.invite'] = {
    path: '/u/:username/invite',
    component: InvitePage,
  };
  app.notificationComponents.user_invited = UserInvitedNotification;
  extend(UserPage.prototype, 'navItems', function (items) {
    if (app.session.user) {
      items.add(
        'invite',
        LinkButton.component(
          {
            href: app.route('user.invite', { username: this.user?.username() }),
            icon: 'fas fa-user',
          },
          [
            app.translator.trans('xypp-invite-user.forum.invite')
          ]
        ),
        10
      );
    }
  });
  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('user_invited', {
      name: 'user_invited',
      icon: 'fas fa-user-check',
      label: app.translator.trans('xypp-invite-user.forum.notification.user_invited_label')
    });
  });
  setTimeout(() => {
    if (app.forum.invitation()) {
      if (app.session?.user) {
        localStorage.removeItem('inviteCode');
        app.modal.show(ConfirmModal, {
          code: app.forum.invitation()
        });
      } else {
        // Store the code in localStorage to be used later after login
        localStorage.setItem('inviteCode', app.forum.invitation()?.code() || "");
      }
    } else if (localStorage.getItem('inviteCode')) {
      if (!app.forum.invitedByUser())
        processInviteCode(localStorage.getItem('inviteCode') + "").then(code => {
          localStorage.removeItem('inviteCode');
          app.modal.show(ConfirmModal, { code });
        });
    }
  }, 1000);
  override(PostMeta.prototype, "getPermalink", (o, post: any) => {
    if (app.forum.inviteCode()) {
      return o(post) + "?inviteCode=" + app.forum.inviteCode()?.code();
    }
    return o(post);
  });

  if (flarum.extensions['xypp-forum-quests']) {
    addCondition("user_be_invited", app.translator.trans(`xypp-invite-user.forum.condition.user_be_invited`) + "");
    addCondition("user_invite", app.translator.trans(`xypp-invite-user.forum.condition.user_invite`) + "");
  }
});