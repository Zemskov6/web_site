function draw(cont) {
    const figureGroup = cont.append("g");
		
    figureGroup.append("rect")
        .attr("x", -20)
        .attr("y", -10)
        .attr("width", 40)
        .attr("height", 40)
        .attr("fill", "#FFE0B2");
    
    figureGroup.append("polygon")
        .attr("points", "-25,-10 0,-35 25,-10")
        .attr("fill", "#E53935");
    
    figureGroup.append("rect")
        .attr("x", -8)
        .attr("y", 15)
        .attr("width", 16)
        .attr("height", 15)
        .attr("fill", "#8D6E63");
    
    figureGroup.append("circle")
        .attr("cx", -10)
        .attr("cy", 5)
        .attr("r", 5)
        .attr("fill", "#42A5F5");
    
    figureGroup.append("rect")
        .attr("x", 10)
        .attr("y", -25)
        .attr("width", 10)
        .attr("height", 18)
        .attr("fill", "#795548");

    figureGroup.append("ellipse")
        .attr("cx", 15)
        .attr("cy", -30)
        .attr("rx", 6)
        .attr("ry", 5)
        .attr("fill", "#BDBDBD");
    
    return figureGroup;
}