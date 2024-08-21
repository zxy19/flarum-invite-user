import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';
import InviteCode from '../common/model/InviteCode';
import InvitedUser from '../common/model/InvitedUser';

declare module 'flarum/common/models/User' {
    export default interface User {
        invitedByUser(): InvitedUser | false;
        invitedUsers(): InvitedUser[] | false;
        inviteCode(): InviteCode | false;
    }
}
