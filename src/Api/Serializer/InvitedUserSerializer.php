<?php

namespace Xypp\InviteUser\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Foundation\ValidationException;
use Xypp\InviteUser\InvitedUser;

class InvitedUserSerializer extends AbstractSerializer
{

    protected $type = 'invited-users';
    public function getDefaultAttributes($invitedUser)
    {
        if (!$invitedUser instanceof InvitedUser) {
            throw new ValidationException(["message" => "\$model is not instance of InvitedUser"]);
        }
        return [
            'id' => $invitedUser->id,
            'user_id' => $invitedUser->user_id,
            'invited_by_user_id' => $invitedUser->invited_by_user_id,
            'created_at' => $invitedUser->created_at
        ];
    }
    public function user($invitedUser)
    {
        return $this->hasOne($invitedUser, BasicUserSerializer::class, "user");
    }
    public function inviter($invitedUser)
    {
        return $this->hasOne($invitedUser, BasicUserSerializer::class, "inviter");
    }
}