import app from "flarum/forum/app";
import InviteCode from "../../common/model/InviteCode";

export async function processInviteCode(code: string): Promise<InviteCode> {
    const data = await app.store.find<InviteCode>("invite-codes", code);
    const meta: {
        message: string,
        unavailable: boolean
    } = data.payload.meta as any;
    if (meta.unavailable) {
        throw new Error(meta.message);
    }
    return data;
}