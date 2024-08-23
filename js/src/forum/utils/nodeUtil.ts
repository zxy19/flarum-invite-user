export function showIf(judgement: boolean, vnode: any, def?: any) {
    return judgement ? vnode : (def || "");
}