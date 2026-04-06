function getFormData() {
    const keyX = document.querySelector('input[name="ox"]:checked').value;
    const showMax = document.querySelector('input[name="oy"][value="max"]').checked;
    const showMin = document.querySelector('input[name="oy"][value="min"]').checked;
    const chartType = document.querySelector('select[name="chartType"]').value;

    return { keyX, showMax, showMin, chartType };
}

function clearGraph() {
    const container = document.getElementById('chart-container');
    if (container) {
        container.innerHTML = '';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tableId = "build";
    const toggleButton = document.getElementById("toggle-table");
    const buildBtn = document.getElementById("buildChartBtn");
    const oyGroup = document.getElementById("oy-group");
    const oyError = document.getElementById("oy-error");

    showTable(tableId, buildings);

    drawGraph(buildings, {
        keyX: "Страна",
        showMax: true,
        showMin: false,
        chartType: "scatter"
    });

    toggleButton.addEventListener("click", () => {
        if (toggleButton.textContent === "Показать таблицу") {
            showTable(tableId, buildings);
            toggleButton.textContent = "Скрыть таблицу";
        } else {
            hideTable(tableId);
            toggleButton.textContent = "Показать таблицу";
        }
    });

    buildBtn.addEventListener("click", () => {
        const dataForm = getFormData();

        if (!dataForm.showMax && !dataForm.showMin) {
            oyGroup.classList.add("error");
            oyError.style.display = "block";
            oyError.textContent = "Ошибка: Выберите хотя бы одно значение для оси OY!";
						const svg = d3.select("svg");
            svg.selectAll("circle, rect").remove()
            return;
        }

        oyGroup.classList.remove("error");
        oyError.style.display = "none";
        oyError.textContent = "";
        drawGraph(buildings, dataForm);
    });

    document.querySelectorAll('input[name="oy"]').forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            oyGroup.classList.remove("error");
            oyError.style.display = "none";
            oyError.textContent = "";
        });
    });
});