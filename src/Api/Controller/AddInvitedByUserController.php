<?php

namespace Xypp\InviteUser\Api\Controller;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Xypp\InviteUser\Api\Serializer\InvitedUserSerializer;
use Xypp\InviteUser\Helper\InviteCheck;
use Xypp\InviteUser\Helper\InviteReward;
use Xypp\InviteUser\InvitedUser;
class AddInvitedByUserController extends AbstractCreateController
{
    public $serializer = InvitedUserSerializer::class;
    protected $settings;
    protected $translator;
    protected $inviteReward;
    protected $inviteCheck;
    public function __construct(SettingsRepositoryInterface $settings, Translator $translator, InviteReward $inviteReward, InviteCheck $inviteCheck)
    {
        $this->settings = $settings;
        $this->translator = $translator;
        $this->inviteReward = $inviteReward;
        $this->inviteCheck = $inviteCheck;
    }
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);
        if ($invitedBy = Arr::get($attributes, 'invited_by_user_id')) {
            $invitedByUser = User::findOrFail($invitedBy);
            
            [$unavailable, $message] = $this->inviteCheck->check($invitedByUser, $actor);
            if ($unavailable) {
                throw new \Flarum\Foundation\ValidationException([
                    'message' => $message
                ]);
            }

            $invitedUserModel = new InvitedUser();
            $invitedUserModel->invited_by_user_id = $invitedByUser->id;
            $invitedUserModel->user_id = $actor->id;
            $invitedUserModel->updateTimestamps();
            $invitedUserModel->save();

            $this->inviteReward->notify($invitedByUser, $actor, $invitedUserModel);
            $this->inviteReward->reward($invitedByUser, $actor);

            return $invitedUserModel;
        } else {
            throw new \Flarum\Foundation\ValidationException([
                'message' => $this->translator->trans('xypp-invite-user.api.invited_by_user_id_is_empty')
            ]);
        }
    }
}