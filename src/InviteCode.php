<?php

namespace Xypp\InviteUser;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property string $code
 */
class InviteCode extends AbstractModel
{
    protected $dates = ['created_at'];
    protected $table = 'invite_code';
    public function user()
    {
        return $this->hasOne(User::class, "id", "user_id");
    }
}
