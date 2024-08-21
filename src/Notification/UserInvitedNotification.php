<?php

namespace Xypp\InviteUser\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;
use Xypp\InviteUser\InvitedUser;

class UserInvitedNotification implements BlueprintInterface
{
    public $user;
    public $invited;

    public function __construct(InvitedUser $invited, User $user)
    {
        $this->invited = $invited;
        $this->user = $user;
    }

    public function getSubject()
    {
        return $this->invited;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
    }

    public static function getType()
    {
        return 'user_invited';
    }

    public static function getSubjectModel()
    {
        return InvitedUser::class;
    }
}