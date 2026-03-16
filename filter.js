const correspond = {
    "Название": "structure",
    "Тип": "category",
    "Страна": "country",
    "Город": "city",
    "Год": ["yearFrom", "yearTo"],
    "Высота": ["heightFrom", "heightTo"]
}

const dataFilter = (dataForm) => {
    
    let dictFilter = {};
    for (const item of dataForm.elements) {
        
        if (!item.id) continue;
  
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
                if (key === "Год") {
                    const from = datafilter['yearFrom'];
                    const to = datafilter['yearTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Высота") {
                    const from = datafilter['heightFrom'];
                    const to = datafilter['heightTo'];
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

    const elements = filterForm.elements;
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type === 'text' || element.type === 'number') {
            element.value = '';
        }
    }
    
    clearTable(idTable);
    
    createTable(originalData, idTable);
}