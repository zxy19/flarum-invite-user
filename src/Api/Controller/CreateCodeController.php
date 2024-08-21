<?php

namespace Xypp\InviteUser\Api\Controller;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\InviteUser\InviteCode;

class CreateCodeController extends AbstractCreateController
{
    protected function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $code = InviteCode::where('user_id', $actor->id)->firstOrNew();
        if (!$code->exists) {
            $code->user_id = $actor->id;
            $time = time();
            srand($time);
            $random = rand(100000, 999999);
            $codeGenStr = "{$actor->id}{$random}{$time}";
            $code->code = substr(md5($codeGenStr), 0, 10);
            $code->save();
        }
        return $code;
    }
}