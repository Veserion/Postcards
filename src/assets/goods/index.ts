function importAll(r: any) {
    return r.keys().map(r);
}

export const goods = importAll((require as any).context('./', false, /\.(png|jpe?g|svg)$/));
