<?php

namespace Xypp\InviteUser\Helper;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Xypp\InviteUser\InvitedUser;

class InviteCheck
{
    protected $translator;
    protected $settings;
    public function __construct(Translator $translator, SettingsRepositoryInterface $settings)
    {
        $this->translator = $translator;
        $this->settings = $settings;
    }
    public function check(User $inviter, User $user)
    {
        $unavailable = false;
        $message = "";

        if (!$unavailable && $inviter->id == $user->id) {
            $unavailable = true;
            $message = $this->translator->trans('xypp-invite-user.api.invited_by_user_id_is_self');
        }

        if (!$unavailable && InvitedUser::where('user_id', $user->id)->exists()) {
            $unavailable = true;
            $message = $this->translator->trans('xypp-invite-user.api.has_already_be_invited');
        }

        if (!$unavailable && !$this->settings->get("xypp-invite.invite_each_other")) {
            if (InvitedUser::where('user_id', $inviter->id)->where('invited_by_user_id', $user->id)->exists()) {
                $unavailable = true;
                $message = $this->translator->trans('xypp-invite-user.api.invited_each_other');
            }
        }

        if (!$unavailable && $this->settings->get("xypp-invite.invite_new_user_only")) {
            if ($inviter->joined_at->gt($user->joined_at)) {
                $unavailable = true;
                $message = $this->translator->trans('xypp-invite-user.api.invited_an_elder_user');
            }
        }

        return [$unavailable, $message];
    }
}