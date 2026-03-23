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

    firstSortSelect.addEventListener('change', function() {
        changeNextSelect(this, 'sort2');
    });

    secondSortSelect.addEventListener('change', function() {
        changeNextSelect(this, 'sort3');
    });

    findButton.addEventListener('click', function() {
        resetSort('list', sortForm, filterForm, clubs);
    });

    clearButton.addEventListener('click', function() {
        resetSort('list', sortForm, filterForm, clubs);
        clearFilter('list', clubs, filterForm);
    });

    sortButton.addEventListener('click', function() {
        filterTable(clubs, 'list', filterForm);
        sortTable('list', sortForm);
    });

    resetSortButton.addEventListener('click', function() {
        resetSort('list', sortForm, filterForm, clubs);
    });
    
});

const createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

const setSortSelect = (arr, sortSelect) => {
    
    sortSelect.append(createOption('Нет', 0));
    arr.forEach((item, index) => {
        sortSelect.append(createOption(item, index + 1));
    });
}

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
        allSelects[i].value = 0;
        allSelects[i].disabled = true; 
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
        allSelects[i].value = 0;
        if (i > 0) {
            allSelects[i].disabled = true;
        }
    }
    
    const allCheckboxes = sortForm.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    filterTable(data, idTable, filterForm);
};

