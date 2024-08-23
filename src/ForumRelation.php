<?php

namespace Xypp\InviteUser;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class ForumRelation
{
    /**
     * @param ShowForumController $controller
     * @param $data
     * @param ServerRequestInterface $request
     */
    public function __invoke(ShowForumController $controller, &$data, ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);
        if ($actor->isGuest()) {
            $data['inviteCode'] = null;
        } else {
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
            $data['inviteCode'] = $code;
        }
        $invitedBy = InvitedUser::where('user_id', $actor->id)->first();
        $data['invitedByUser'] = $invitedBy;
        if ($inviteCode = Arr::get($request->getQueryParams(), "inviteCode")) {
            if (!$invitedBy)
                $data['invitation'] = InviteCode::where('code', $inviteCode)->first();
        }
    }
}