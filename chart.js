function createArrGraph(data, key, showMaxTituls, showMinTituls, showMaxChamps, showMinChamps) {
    const groupObj = d3.group(data, (d) => d[key]);
    
    const arrGraph = [];
    for (const entry of groupObj) {
        const titulsValues = entry[1].map((d) => d["Титулы Чемпионата"]);
        const champsValues = entry[1].map((d) => d["Сезонов в ЛЧ"]);
        
        const result = { labelX: entry[0], values: [] };
        
        if (showMaxTituls) {
            result.maxTituls = d3.max(titulsValues);
            result.values.push(result.maxTituls);
        }
        if (showMinTituls) {
            result.minTituls = d3.min(titulsValues);
            result.values.push(result.minTituls);
        }
        if (showMaxChamps) {
            result.maxChamps = d3.max(champsValues);
            result.values.push(result.maxChamps);
        }
        if (showMinChamps) {
            result.minChamps = d3.min(champsValues);
            result.values.push(result.minChamps);
        }
        
        arrGraph.push(result);
    }
    
    // Сортируем для лучшего отображения
    arrGraph.sort((a, b) => a.labelX.localeCompare(b.labelX));
    
    return arrGraph;
}

function createAxis(svg, data, attrArea) {
    let yValues = [];
    data.forEach(d => {
        yValues = yValues.concat(d.values);
    });

    const min = d3.min(yValues);
    const max = d3.max(yValues);

    const scaleX = d3
        .scaleBand()
        .domain(data.map((d) => d.labelX))
        .range([0, attrArea.width - 2 * attrArea.marginX])
        .padding(0.2);

    const scaleY = d3
        .scaleLinear()
        .domain([min * 0.85, max * 1.1])
        .range([attrArea.height - 2 * attrArea.marginY, 0]);

    const axisX = d3.axisBottom(scaleX);
    const axisY = d3.axisLeft(scaleY);

    svg
        .append("g")
        .attr(
            "transform",
            `translate(${attrArea.marginX}, ${attrArea.height - attrArea.marginY})`
        )
        .call(axisX)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)")
        .style("font-size", data.length > 20 ? "8px" : "10px");

    svg
        .append("g")
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .call(axisY);

    return [scaleX, scaleY];
}

function createScatter(svg, data, scaleX, scaleY, attrArea, color, fieldName, valueIndex, totalFields, splitOverlaps) {
    const r = 5;
    const offset = (valueIndex - (totalFields - 1) / 2) * (r * 1.5);
    
    svg
        .selectAll(`.dot-${fieldName}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", (d) => {
            const baseX = scaleX(d.labelX) + scaleX.bandwidth() / 2;
            if (!splitOverlaps) {
                return baseX + offset;
            }
            return baseX + offset;
        })
        .attr("cy", (d) => scaleY(d[fieldName]))
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .style("fill", color);
}

function createBars(svg, data, scaleX, scaleY, attrArea, color, fieldName, valueIndex, totalFields) {
    const barWidth = scaleX.bandwidth() / totalFields;
    const shift = valueIndex * barWidth;

    svg
        .selectAll(`.bar-${fieldName}`)
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => scaleX(d.labelX) + shift)
        .attr("y", (d) => scaleY(d[fieldName]))
        .attr("width", barWidth - 1)
        .attr("height", (d) => attrArea.height - 2 * attrArea.marginY - scaleY(d[fieldName]))
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .style("fill", color);
}

function createLine(svg, data, scaleX, scaleY, attrArea, color, fieldName) {
    const line = d3.line()
        .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .y(d => scaleY(d[fieldName]))
        .curve(d3.curveLinear);
    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`);
    
    svg.selectAll(`.dot-${fieldName}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("r", 4)
        .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", d => scaleY(d[fieldName]))
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .style("fill", color);
}

function drawGraph(data, dataForm) {
    const keyX = dataForm.keyX;
    const showMaxTituls = dataForm.showMaxTituls;
    const showMinTituls = dataForm.showMinTituls;
    const showMaxChamps = dataForm.showMaxChamps;
    const showMinChamps = dataForm.showMinChamps;
    const chartType = dataForm.chartType;

    const arrGraph = createArrGraph(data, keyX, showMaxTituls, showMinTituls, showMaxChamps, showMinChamps);

    const svg = d3.select("svg");
    svg.selectAll("*").remove();

    // Увеличиваем размер SVG для лучшего отображения
    svg.attr("width", 950).attr("height", 500);

    const attrArea = {
        width: 950,
        height: 500,
        marginX: 80,
        marginY: 60
    };

    const [scaleX, scaleY] = createAxis(svg, arrGraph, attrArea);

    const fields = [];
    if (showMaxTituls) fields.push({ name: "maxTituls", color: "#1f77b4", label: "Макс. титулов" });
    if (showMinTituls) fields.push({ name: "minTituls", color: "#ff7f0e", label: "Мин. титулов" });
    if (showMaxChamps) fields.push({ name: "maxChamps", color: "#2ca02c", label: "Макс. сезонов в ЛЧ" });
    if (showMinChamps) fields.push({ name: "minChamps", color: "#d62728", label: "Мин. сезонов в ЛЧ" });
    
    const totalFields = fields.length;
    const splitOverlaps = totalFields > 1;

    
    if (chartType === "scatter") {
        fields.forEach((field, idx) => {
            createScatter(svg, arrGraph, scaleX, scaleY, attrArea, field.color, field.name, idx, totalFields, splitOverlaps);
        });
    } else if (chartType === "line") {
        fields.forEach((field) => {
            createLine(svg, arrGraph, scaleX, scaleY, attrArea, field.color, field.name);
        });
    } else {
        fields.forEach((field, idx) => {
            createBars(svg, arrGraph, scaleX, scaleY, attrArea, field.color, field.name, idx, totalFields);
        });
    }

}