const W = 600, H = 600, Cx = W / 2, Cy = H / 2, K = 18;

function pt(t) {
    const x = 9 * (Math.cos(t) - Math.cos(4 * t) / 4);
    const y = 9 * (Math.sin(t) - Math.sin(4 * t) / 4);
    return { x: Cx + K * x, y: Cy - K * y };
}

function path(n) {
    const pts = [];
    for (let i = 0; i <= n; i++) {
        const t = 2 * Math.PI * (i / n);
        pts.push(pt(t));
    }
    return pts;
}