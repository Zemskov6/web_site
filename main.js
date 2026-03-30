document.addEventListener("DOMContentLoaded", function () {
    const svg = d3.select("#svg").attr("width", W).attr("height", H);
    const form = document.getElementById("form");

    function run() {
    svg.selectAll("*").remove();

    const pts = path(300);
    const line = d3.line().x(d => d.x).y(d => d.y);
    const trPath = svg.append("path")
        .attr("d", line(pts))
        .attr("fill", "none")
        .attr("stroke", "#11ff49")
        .attr("stroke-width", 2);

    const pic = draw(svg);
    const dur = parseInt(String(form.duration.value)) || 5000;
    const rot = parseFloat(String(form.rotation.value)) || 90;

    const minScale = parseFloat(document.getElementById("minScale").value);
    const maxScale = parseFloat(document.getElementById("maxScale").value);

    pic.attr("transform", `translate(${pts[0].x},${pts[0].y}) scale(${minScale}) rotate(0)`);

    const trNode = trPath.node();
    const length = trNode.getTotalLength();

    pic.transition()
        .duration(dur)
        .ease(d3.easeLinear)
        .attrTween("transform", function () {
            return function (t) {
                const { x, y } = trNode.getPointAtLength((1 - t) * length);
                const angle = (rot * (t * dur)) / 1000;
                const s = minScale + (maxScale - minScale) * t;
                return `translate(${x},${y}) scale(${s}) rotate(${angle})`;
            };
        });
}

    document.getElementById("btn-start").onclick = function (e) { 
        e.preventDefault(); 
        run(); 
    };
    
    document.getElementById("btn-clear").onclick = function (e) {
        e.preventDefault();
        svg.selectAll("*").interrupt();
        svg.selectAll("*").remove();
        const pts = path(300);
        svg.append("path")
            .attr("d", d3.line().x(d => d.x).y(d => d.y)(pts))
            .attr("fill", "none")
            .attr("stroke", "#11ff49")
            .attr("stroke-width", 2);
    };

    const pts = path(300);
    svg.append("path")
        .attr("d", d3.line().x(d => d.x).y(d => d.y)(pts))
        .attr("fill", "none")
        .attr("stroke", "#11ff49")
        .attr("stroke-width", 2);
});