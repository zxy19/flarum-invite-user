import Extend from 'flarum/common/extenders';
import User from 'flarum/common/models/User';
import InviteCode from './model/InviteCode';
import InvitedUser from './model/InvitedUser';
export default [
  new Extend.Store()
    .add('invite-codes', InviteCode)
    .add('invited-users', InvitedUser),
];