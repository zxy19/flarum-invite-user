<?php

namespace Xypp\InviteUser\Condition;
use Flarum\User\User;
use Xypp\ForumQuests\ConditionDefinition;
use Xypp\ForumQuests\Data\ConditionAccumulation;
use Xypp\InviteUser\InvitedUser;

class UserInvite extends ConditionDefinition
{
    public function __construct()
    {
        parent::__construct('user_invite');
    }
    public function getAbsoluteValue(User $user, ConditionAccumulation $accumulation): bool
    {
        $flag = null;
        InvitedUser::where('invited_by_user_id', $user->id)->get()->each(function (InvitedUser $invitedUser) use (&$flag, &$accumulation) {
            $flag = $invitedUser->id;
            $accumulation->updateValue($invitedUser->created_at, 1);
        });
        $accumulation->updateFlag($flag);
        return $accumulation->dirty;
    }
    public function updateValue(User $user, ConditionAccumulation $accumulation): bool
    {
        $flag = $accumulation->updateFlag;
        $query = InvitedUser::query();
        if ($flag) {
            $query->where('id', '>', $flag);
        }
        $query->where('invited_by_user_id', $user->id)->get()->each(function (InvitedUser $invitedUser) use (&$flag, &$accumulation) {
            $flag = $invitedUser->id;
            $accumulation->updateValue($invitedUser->created_at, 1);
        });
        $accumulation->updateFlag($flag);
        return $accumulation->dirty;
    }
}