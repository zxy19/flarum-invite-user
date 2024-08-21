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
use Xypp\InviteUser\InvitedUser;
class AddInvitedByUserController extends AbstractCreateController
{
    public $serializer = InvitedUserSerializer::class;
    protected $settings;
    protected $translator;
    public function __construct(SettingsRepositoryInterface $settings, Translator $translator)
    {
        $this->settings = $settings;
        $this->translator = $translator;
    }
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        if (InvitedUser::where('user_id', $actor->id)->exists()) {
            throw new \Flarum\Foundation\ValidationException([
                'message' => $this->translator->trans('xypp-invite-user.api.has_already_be_invited')
            ]);
        }

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);

        if ($invitedBy = Arr::get($attributes, 'invited_by_user_id')) {
            if ($invitedBy == $actor->id) {
                throw new \Flarum\Foundation\ValidationException([
                    'message' => $this->translator->trans('xypp-invite-user.api.invited_by_user_id_is_self')
                ]);
            }
            $invitedByUser = User::findOrFail($invitedBy);
            $invitedUserModel = new InvitedUser();
            $invitedUserModel->invited_by_user_id = $invitedByUser->id;
            $invitedUserModel->user_id = $actor->id;
            $invitedUserModel->updateTimestamps();
            $invitedUserModel->save();

            return $invitedUserModel;
        } else {
            throw new \Flarum\Foundation\ValidationException([
                'message' => $this->translator->trans('xypp-invite-user.api.invited_by_user_id_is_empty')
            ]);
        }
    }
}