<?php

namespace Xypp\InviteUser;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

class InvitedUser extends AbstractModel
{
    protected $dates = ['created_at'];
    protected $table = 'invite_user';
    public function user()
    {
        return $this->hasOne(User::class, "user_id", "id");
    }
    public function invitedByUser()
    {
        return $this->hasOne(User::class, "invited_by_user_id", "id");
    }
}
