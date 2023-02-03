function parse_code(code:string): string {
    return code;    
}

export function sub(code:string): string {
    if (code.startsWith('#')) {
        return parse_code(code.slice(1));
    }
    return `${code.length}文字選択されました`;    
}