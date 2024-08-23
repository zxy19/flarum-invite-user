<?php

namespace Xypp\InviteUser\Api\Controller;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\InviteUser\Api\Serializer\InvitedCodeSerializer;
use Xypp\InviteUser\InviteCode;

class ShowCodeController extends AbstractShowController
{
    public $serializer = InvitedCodeSerializer::class;
    public $include = ['user'];
    protected function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $code = Arr::get($request->getQueryParams(), 'code');
        return InviteCode::where('code', $code)->firstOrFail();
    }
}