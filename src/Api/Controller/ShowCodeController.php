<?php

namespace Xypp\InviteUser\Api\Controller;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Http\RequestUtil;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Xypp\InviteUser\Api\Serializer\InvitedCodeSerializer;
use Xypp\InviteUser\Helper\InviteCheck;
use Xypp\InviteUser\InviteCode;
use Xypp\InviteUser\InvitedUser;

class ShowCodeController extends AbstractShowController
{
    public $serializer = InvitedCodeSerializer::class;
    public $include = ['user'];
    protected InviteCheck $inviteCheck;
    public function __construct(InviteCheck $inviteCheck)
    {
        $this->inviteCheck = $inviteCheck;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $code = Arr::get($request->getQueryParams(), 'code');
        $codeObject = InviteCode::where('code', $code)->firstOrFail();
        $user = $codeObject->user()->first();

        [$unavailable, $message] = $this->inviteCheck->check($user, $actor);

        $document->addMeta('unavailable', $unavailable);
        $document->addMeta('message', $message);

        return $codeObject;
    }
}