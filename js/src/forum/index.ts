import app from 'flarum/forum/app';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import InvitedUser from '../common/model/InvitedUser';
import InviteCode from '../common/model/InviteCode';
import { extend } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';
import LinkButton from 'flarum/common/components/LinkButton';
import { InvitePage } from './components/InvitePage';
app.initializers.add('xypp/flarum-invite-user', () => {
  User.prototype.invitedByUser = Model.hasOne<InvitedUser>('invitedByUser') as any;
  User.prototype.invitedUsers = Model.hasMany<InvitedUser>('invitedUsers') as any;
  User.prototype.inviteCode = Model.hasOne<InviteCode>('inviteCode');
  app.routes['user.invite'] = {
    path: '/u/:username/invite',
    component: InvitePage,
  };
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
});
