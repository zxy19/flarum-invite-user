import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';

// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models

export default class InvitedUser extends Model {
    user = Model.hasOne<User>('user');
    inviter = Model.hasOne<User>('inviter');
}
