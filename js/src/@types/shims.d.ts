import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';
import InviteCode from '../common/model/InviteCode';
import InvitedUser from '../common/model/InvitedUser';

declare module 'flarum/common/models/User' {
    export default interface User {
        invitedByUser(): InvitedUser | undefined;
        invitedUsers(): InvitedUser[] | undefined;
    }
}
declare module 'flarum/common/models/Forum' {
    export default interface Forum {
        inviteCode(): InviteCode | undefined;
        invitation(): InviteCode | undefined ;
        invitedByUser(): InvitedUser | undefined;
    }
}