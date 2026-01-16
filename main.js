const secretText = 'н,дышгтьа_рлооы_и_оихтчиьаы_ртоёттбмо_тв_к_боо_шжотг_о_ждчуо_,__';

const keys = [
    'победа',
    'история', 
    'хоккей',
    'засуха',
    'контент',
    'астрономия',
    'космонавт',
    'подготовка',
    'судья',
    'интерфейс',
    'экология'
];

function decodeText(text, key) {
    const columnsCount = key.length;
    const textLength = text.length;
    const rowsCount = Math.ceil(textLength / columnsCount);
    

    const letters = [];
    for (let i = 0; i < columnsCount; i++) {
        letters.push({
            letter: key[i],
            position: i
        });
    }
    
    letters.sort(function(a, b) {
        if (a.letter < b.letter) return -1;
        if (a.letter > b.letter) return 1;
        return a.position - b.position;
    });
    
    const columnOrder = [];
    for (let j = 0; j < columnsCount; j++) {
        columnOrder.push(letters[j].position);
    }
    
    const table = [];
    for (let r = 0; r < rowsCount; r++) {
        const row = [];
        for (let c = 0; c < columnsCount; c++) {
            row.push('');
        }
        table.push(row);
    }

    let textIndex = 0;

    for (let orderIndex = 0; orderIndex < columnOrder.length; orderIndex++) {
        const col = columnOrder[orderIndex];
        
        for (let row = 0; row < rowsCount; row++) {
            if (textIndex < textLength) {
                table[row][col] = text[textIndex];
                textIndex++;
            }
        }
    }

    let result = '';
    for (let rowNum = 0; rowNum < rowsCount; rowNum++) {
        for (let colNum = 0; colNum < columnsCount; colNum++) {
            result += table[rowNum][colNum];
        }
    }
    
    return result;
}


for (let i = 0; i < keys.length; i++) {
    const currentkey = keys[i];
    console.log('Ключ:' + currentkey);
    
    const decoded = decodeText(secretText, currentkey);
    console.log('Расшифрованный текст: ' + decoded);
    
}

