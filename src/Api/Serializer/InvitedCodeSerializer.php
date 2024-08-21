<?php

namespace Xypp\InviteUser\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Foundation\ValidationException;
use Xypp\InviteUser\InviteCode;
use Xypp\InviteUser\InvitedUser;

class InvitedCodeSerializer extends AbstractSerializer
{
    protected $type = 'invite-codes';
    public function getDefaultAttributes($invitedCode)
    {
        if (!$invitedCode instanceof InviteCode) {
            throw new ValidationException(["message" => "\$model is not instance of InvitedCode"]);
        }
        return [
            'id' => $invitedCode->id,
            'user_id' => $invitedCode->user_id,
            'code' => $invitedCode->code,
        ];
    }
}