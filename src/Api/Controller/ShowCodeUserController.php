<?php

namespace Xypp\InviteUser\Api\Controller;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\InviteUser\InviteCode;

class ShowCodeUserController extends AbstractShowController
{
    public $serializer = BasicUserSerializer::class;

    protected function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();
        $code = Arr::get($request->getQueryParams(), 'code');
        $codeObj = InviteCode::where('code', $code)->firstOrFail();
        return $codeObj->user();
    }
}