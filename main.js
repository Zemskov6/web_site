document.addEventListener("DOMContentLoaded", function() {

    createTable(clubs, 'list');

    const filterForm = document.getElementById('filter-form');
    const sortForm = document.getElementById('sort-form');

    const findButton = filterForm.querySelector('input[value="Найти"]');
    const clearButton = filterForm.querySelector('input[value="Очистить фильтры"]');
    const sortButton = sortForm.querySelector('input[value="Сортировать"]');
    const resetSortButton = sortForm.querySelector('input[value="Сбросить сортировку"]');

    setSortSelects(clubs[0], sortForm);

    const firstSortSelect = sortForm.querySelector('select');
    const secondSortSelect = document.getElementById('sort2');
    const thirdSortSelect = document.getElementById('sort3');

    const buildChartBtn = document.getElementById('buildChartBtn');
    const oyGroup = document.getElementById('oy-group');
    const oyError = document.getElementById('oy-error');

    if (buildChartBtn) {
        buildChartBtn.addEventListener('click', () => {
            const xAxis = document.querySelector('input[name="x_axis"]:checked');
            const maxTituls = document.querySelector('input[name="max_tituls"]')?.checked || false;
            const minTituls = document.querySelector('input[name="min_tituls"]')?.checked || false;
            const maxChamps = document.querySelector('input[name="max_champs"]')?.checked || false;
            const minChamps = document.querySelector('input[name="min_champs"]')?.checked || false;
            const chartTypeElem = document.querySelector('input[name="chart_type"]:checked');
            
            if (!xAxis) {
                alert("Выберите ось X");
                return;
            }
            
            if (!maxTituls && !minTituls && !maxChamps && !minChamps) {
                if (oyGroup) oyGroup.classList.add("error");
                if (oyError) {
                    oyError.style.display = "block";
                    oyError.textContent = "Ошибка: Выберите хотя бы одно значение для оси OY!";
										const svg = d3.select("svg");
            				svg.selectAll("circle, rect").remove()
                }
                return;
            }
            
            if (oyGroup) oyGroup.classList.remove("error");
            if (oyError) {
                oyError.style.display = "none";
                oyError.textContent = "";
            }
            
            drawGraph(clubs, {
                keyX: xAxis.value,
                showMaxTituls: maxTituls,
                showMinTituls: minTituls,
                showMaxChamps: maxChamps,
                showMinChamps: minChamps,
                chartType: chartTypeElem ? chartTypeElem.value : "bar"
            });
        });
    }

    // Скрываем ошибку при изменении чекбоксов
    const checkboxes = document.querySelectorAll('input[name="max_tituls"], input[name="min_tituls"], input[name="max_champs"], input[name="min_champs"]');
    checkboxes.forEach(el => {
        if (el) {
            el.addEventListener("change", () => {
                if (oyGroup) oyGroup.classList.remove("error");
                if (oyError) {
                    oyError.style.display = "none";
                    oyError.textContent = "";
                }
            });
        }
    });

    if (firstSortSelect) {
        firstSortSelect.addEventListener('change', function() {
            changeNextSelect(this, 'sort2');
        });
    }

    if (secondSortSelect) {
        secondSortSelect.addEventListener('change', function() {
            changeNextSelect(this, 'sort3');
        });
    }

    if (findButton) {
        findButton.addEventListener('click', function() {
            resetSort('list', sortForm, filterForm, clubs);
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function() {
            resetSort('list', sortForm, filterForm, clubs);
            if (typeof clearFilter === 'function') {
                clearFilter('list', clubs, filterForm);
            }
        });
    }

    if (sortButton) {
        sortButton.addEventListener('click', function() {
            if (typeof filterTable === 'function') {
                filterTable(clubs, 'list', filterForm);
            }
            if (typeof sortTable === 'function') {
                sortTable('list', sortForm);
            }
        });
    }

    if (resetSortButton) {
        resetSortButton.addEventListener('click', function() {
            resetSort('list', sortForm, filterForm, clubs);
        });
    }
    
});

// формирование полей элемента списка с заданным текстом и значением
const createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

// формирование поля со списком 
const setSortSelect = (arr, sortSelect) => {
    sortSelect.append(createOption('Нет', 0));
    arr.forEach((item, index) => {
        sortSelect.append(createOption(item, index + 1));
    });
}

// формируем поля со списком для многоуровневой сортировки
const setSortSelects = (data, dataForm) => { 
    const head = Object.keys(data);
    const allSelect = dataForm.getElementsByTagName('select');
    
    for(const item of dataForm.elements){
        if (item.tagName === 'SELECT') {
            setSortSelect(head, item);
            if (item !== allSelect[0]) {
                item.disabled = true;
            }
        }
    }
}

const resetNextSelects = (startIndex) => {
    const allSelects = document.getElementById('sort-form').getElementsByTagName('select');
    
    for (let i = startIndex + 1; i < allSelects.length; i++) {
        if (allSelects[i]) {
            allSelects[i].value = 0;          
            allSelects[i].disabled = true;
        }
    }
};

const changeNextSelect = (curSelect, nextSelectId) => {
    let nextSelect = document.getElementById(nextSelectId);
    if (!nextSelect) return;
    
    const allSelects = document.getElementById('sort-form').getElementsByTagName('select');
    let currentIndex = 0;
    for (let i = 0; i < allSelects.length; i++) {
        if (allSelects[i] === curSelect) {
            currentIndex = i;
            break;
        }
    }

    if (curSelect.value == 0) {
        nextSelect.disabled = true;
        nextSelect.value = 0;
        resetNextSelects(currentIndex);
        return;
    }

    nextSelect.disabled = false;
    nextSelect.innerHTML = curSelect.innerHTML;

    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.value);
    }

    resetNextSelects(currentIndex + 1);
};

const resetSort = (idTable, sortForm, filterForm, data) => {
    const allSelects = sortForm.getElementsByTagName('select');
    
    for (let i = 0; i < allSelects.length; i++) {
        if (allSelects[i]) {
            allSelects[i].value = 0;
            if (i > 0) {
                allSelects[i].disabled = true;
            }
        }
    }
    
    const allCheckboxes = sortForm.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    if (typeof filterTable === 'function') {
        filterTable(data, idTable, filterForm);
    }
};