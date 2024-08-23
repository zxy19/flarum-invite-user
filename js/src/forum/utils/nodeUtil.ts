export function showIf(judgement: boolean, vnode: any, def?: any) {
    const r = judgement ? vnode : (def || "");
    if (typeof r === "function") return r();
    return r;
}