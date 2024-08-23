import app from "flarum/forum/app";
import InviteCode from "../../common/model/InviteCode";

export async function processInviteCode(code: string): Promise<InviteCode> {
    return app.store.find<InviteCode>("invite-codes", code);
}