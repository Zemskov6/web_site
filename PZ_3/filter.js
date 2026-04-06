const correspond = {
    "Название клуба": "name",
    "Страна": "country",
    "Год основания": "year",
    "Число воспитанников академии ФК в основе": ["academyFrom", "academyTo"],
    "Сезонов в ЛЧ": ["ligaFrom", "ligaTo"],
    "Титулы Чемпионата": ["titulsFrom", "titulsTo"],
    "Вместимость домашнего стадиона, тыс.чел": ["homestic_stadiumFrom", "homestic_stadiumTo"]
};

const dataFilter = (dataForm) => {
    
    let dictFilter = {};

    for (const item of dataForm.elements) {

        let valInput = item.value;
        if (item.type === "text") {
            valInput = valInput.toLowerCase();
        } 
        else if (item.type === "number") {
            if (valInput === '') {
                if (item.id.includes('From')) {
                    valInput = -Infinity;
                }
                else if (item.id.includes('To')) {
                    valInput = Infinity;
                }
            } 
            else {
                valInput = Number(valInput);
            }
        }

        dictFilter[item.id] = valInput;
    }       
    return dictFilter;
}

const filterTable = (data, idTable, dataForm) =>{

    const datafilter = dataFilter(dataForm);

    let tableFilter = data.filter(item => {

        let result = true;
        
        Object.entries(item).map(([key, val]) => {
            
            if (typeof val == 'string') {
                const filterValue = datafilter[correspond[key]];
                if (filterValue && filterValue !== '') {
                    result &&= val.toLowerCase().includes(filterValue);
                }
            }
            
            if (typeof val == 'number') {
                if (key === "Число воспитанников академии ФК в основе") {
                    const from = datafilter['academyFrom'];
                    const to = datafilter['academyTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Сезонов в ЛЧ") {
                    const from = datafilter['ligaFrom'];
                    const to = datafilter['ligaTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Титулы Чемпионата") {
                    const from = datafilter['titulsFrom'];
                    const to = datafilter['titulsTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Вместимость домашнего стадиона, тыс.чел") {
                    const from = datafilter['homestic_stadiumFrom'];
                    const to = datafilter['homestic_stadiumTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }
            }
         });

         return result;
    });     

    clearTable(idTable);
    createTable(tableFilter, idTable);  
}

const clearFilter = (idTable, originalData, filterForm) => {
    Array.from(filterForm.elements).forEach(element => {
        if (element.type === 'text' || element.type === 'number') {
            element.value = '';
        }
    });
    
    clearTable(idTable);
    createTable(originalData, idTable);
};