<?php

namespace Xypp\InviteUser\Helper;
use AntoineFr\Money\Event\MoneyUpdated;
use Flarum\Extension\ExtensionManager;
use Flarum\Notification\NotificationSyncer;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Xypp\InviteUser\InvitedUser;
use Illuminate\Events\Dispatcher;
use Xypp\InviteUser\Notification\UserInvitedNotification;

class InviteReward
{
    protected SettingsRepositoryInterface $settings;
    public NotificationSyncer $notifications;
    public ExtensionManager $extensionManager;
    public Dispatcher $events;
    public function __construct(
        SettingsRepositoryInterface $settings,
        NotificationSyncer $notifications,
        ExtensionManager $extensionManager,
        Dispatcher $events
    ) {
        $this->settings = $settings;
        $this->notifications = $notifications;
        $this->extensionManager = $extensionManager;
        $this->events = $events;
    }
    public function reward(User $inviter, User $user)
    {
        // To the user who was invited
        $rewardBeInvited = $this->settings->get("xypp-invite.reward_be_invited");
        if ($rewardBeInvited) {
            if ($this->extensionManager->isEnabled("antoinefr-money")) {
                $user->money += $rewardBeInvited;
                $this->events->dispatch(new MoneyUpdated($user));
                $user->save();
            }
        }

        $rewardInviter = $this->settings->get("xypp-invite.reward_inviter");
        if ($rewardInviter) {
            if ($this->extensionManager->isEnabled("antoinefr-money")) {
                $inviter->money += $rewardInviter;
                $this->events->dispatch(new MoneyUpdated($inviter));
                $inviter->save();
            }
        }
    }
    public function notify(User $inviter, User $user, InvitedUser $invitedUser)
    {
        $this->notifications->sync(
            new UserInvitedNotification($invitedUser, $user),
            [$inviter]
        );
    }
}