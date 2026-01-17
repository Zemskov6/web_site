const images = {
    'base-height': '/Users/zemskov/Desktop/laba_7_js/height.png',
    'four-sides': '/Users/zemskov/Desktop/laba_7_js/4sides.png'
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[value="Показать"]').addEventListener('click', updateInputFields);
    document.querySelector('input[value="Вычислить"]').addEventListener('click', function() {
        calculate(document.getElementById('calcForm'));
    });
    document.querySelector('input[value="Очистить"]').addEventListener('click', function() {
        clearData(document.getElementById('calcForm'));
    });
    
    const inputs = document.querySelectorAll('#inputFields input[type="number"]');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', clearOutputOnInput);
    }
});

function updateInputFields() {
    const type = document.getElementById('dataType').value;
    const image = document.getElementById('trapezoidImage');

    const inputs = document.querySelectorAll('#inputFields input[type="number"]');
    const input1 = inputs[0];
    const input2 = inputs[1];
    const input3 = inputs[2];
    const input4 = inputs[3];
    
    const labels = document.querySelectorAll('#inputFields label');
    
    if (type === 'base-height') {
        labels[0].innerHTML = 'a (нижнее основание) = ';
        labels[0].appendChild(input1);
        
        labels[1].innerHTML = 'h (высота) = ';
        labels[1].appendChild(input2);
        
        labels[2].innerHTML = 'α (угол слева, градусы) = ';
        labels[2].appendChild(input3);
        
        labels[3].innerHTML = 'β (угол справа, градусы) = ';
        labels[3].appendChild(input4);
        
        image.src = images['base-height'];
        image.alt = 'Трапеция с основанием, высотой и углами';
    } else {
        labels[0].innerHTML = 'a (нижнее основание) = ';
        labels[0].appendChild(input1);
        
        labels[1].innerHTML = 'b (верхнее основание) = ';
        labels[1].appendChild(input2);
        
        labels[2].innerHTML = 'c (левая сторона) = ';
        labels[2].appendChild(input3);
        
        labels[3].innerHTML = 'd (правая сторона) = ';
        labels[3].appendChild(input4);
        
        image.src = images['four-sides'];
        image.alt = 'Трапеция с четырьмя сторонами';
    }
    
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';

    input1.classList.remove('error');
    input2.classList.remove('error');
    input3.classList.remove('error');
    input4.classList.remove('error');
    
    clearOutput();
}

function calculate(form) {
    const inputs = document.querySelectorAll('#inputFields input[type="number"]');
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function() {
            this.classList.remove('error');
        });
    }
    
    const output = document.getElementById('output');
    output.innerHTML = "<p>Результат:</p>";
    
    const calcSelect = document.getElementById('calcSelect');
    const selectedOptions = [];
    
    for (let i = 0; i < calcSelect.options.length; i++) {
        if (calcSelect.options[i].selected) {
            selectedOptions.push(calcSelect.options[i].value);
        }
    }
    
    if (selectedOptions.length === 0) {
        output.innerHTML = "<p style='color: red;'>Выберите хотя бы одну характеристику для вычисления!</p>";
        return false;
    }
    
    const type = document.getElementById('dataType').value;
    let isValid = true;
    let a, b, c, d, h, alpha, beta;
    
    if (type === 'base-height') {
        a = parseFloat(inputs[0].value);
        h = parseFloat(inputs[1].value);
        alpha = parseFloat(inputs[2].value);
        beta = parseFloat(inputs[3].value);
        
        if (isNaN(a) || a <= 0) {
            inputs[0].classList.add("error");
            isValid = false;
        }
        if (isNaN(h) || h <= 0) {
            inputs[1].classList.add("error");
            isValid = false;
        }
        if (isNaN(alpha) || alpha <= 0 || alpha >= 180) {
            inputs[2].classList.add("error");
            isValid = false;
        }
        if (isNaN(beta) || beta <= 0 || beta >= 180) {
            inputs[3].classList.add("error");
            isValid = false;
        }
        
        if (isValid) {
            if (alpha + beta >= 180) {
                output.innerHTML = "<p style='color: red;'>Сумма углов α и β должна быть меньше 180°!</p>";
                return false;
            }
            
            const alphaRad = alpha * Math.PI / 180;
            const betaRad = beta * Math.PI / 180;
            
            const projectionLeft = h / Math.tan(alphaRad);
            const projectionRight = h / Math.tan(betaRad);
            b = a - projectionLeft - projectionRight;
            
            if (b <= 0) {
                output.innerHTML = "<p style='color: red;'>Такая трапеция не существует (верхнее основание ≤ 0)!</p>";
                return false;
            }
            
            c = h / Math.sin(alphaRad);
            d = h / Math.sin(betaRad);
        }
    } else {
        a = parseFloat(inputs[0].value);
        b = parseFloat(inputs[1].value);
        c = parseFloat(inputs[2].value);
        d = parseFloat(inputs[3].value);
        
        if (isNaN(a) || a <= 0) {
            inputs[0].classList.add("error");
            isValid = false;
        }
        if (isNaN(b) || b <= 0) {
            inputs[1].classList.add("error");
            isValid = false;
        }
        if (isNaN(c) || c <= 0) {
            inputs[2].classList.add("error");
            isValid = false;
        }
        if (isNaN(d) || d <= 0) {
            inputs[3].classList.add("error");
            isValid = false;
        }
        
        if (isValid) {
            if (Math.abs(a - b) >= c + d) {
                output.innerHTML = "<p style='color: red;'>Такая трапеция не существует!</p>";
                return false;
            }
            
            const s = (c + d + a - b) / 2;
            const areaTriangle = Math.sqrt(s * (s - c) * (s - d) * (s - (a - b)));
            
            if (a - b === 0) {
                output.innerHTML = "<p style='color: red;'>Основания не могут быть равны (это будет параллелограмм)!</p>";
                return false;
            }
            
            h = (2 * areaTriangle) / (a - b);
            
            alpha = Math.asin(h / c) * 180 / Math.PI;
            beta = Math.asin(h / d) * 180 / Math.PI;
        }
    }
    
    if (!isValid) {
        output.innerHTML = "<p style='color: red;'>Заполните все поля корректными положительными числами!</p>";
        return false;
    }

    if (selectedOptions.indexOf('area') !== -1) {
        const area = 0.5 * (a + b) * h;
        const newElement = document.createElement('p');
        newElement.innerHTML = "Площадь S = " + area.toFixed(3) + " см²";
        output.appendChild(newElement);
    }
    
    if (selectedOptions.indexOf('perimeter') !== -1) {
        const perimeter = a + b + c + d;
        const newElement = document.createElement('p');
        newElement.innerHTML = "Периметр P = " + perimeter.toFixed(3) + " см";
        output.appendChild(newElement);
    }
    
    if (selectedOptions.indexOf('diagonals') !== -1) {
        const d1 = Math.sqrt(a*a + d*d - 2*a*d*Math.cos(beta * Math.PI/180));
        const d2 = Math.sqrt(a*a + c*c - 2*a*c*Math.cos(alpha * Math.PI/180));
        
        const newElement1 = document.createElement('p');
        newElement1.innerHTML = "Диагональ d₁ = " + d1.toFixed(3) + " см";
        output.appendChild(newElement1);
        
        const newElement2 = document.createElement('p');
        newElement2.innerHTML = "Диагональ d₂ = " + d2.toFixed(3) + " см";
        output.appendChild(newElement2);
    }
    
    if (selectedOptions.indexOf('diagonalAngle') !== -1) {
        const d1 = Math.sqrt(a*a + d*d - 2*a*d*Math.cos(beta * Math.PI/180));
        const d2 = Math.sqrt(a*a + c*c - 2*a*c*Math.cos(alpha * Math.PI/180));
        
        const cosAngle = (d1*d1 + d2*d2 - (a+b)*(a+b)) / (2*d1*d2);
        const clampedCos = Math.max(-1, Math.min(1, cosAngle));
        const angle = Math.acos(clampedCos) * 180 / Math.PI;
        
        const newElement = document.createElement('p');
        newElement.innerHTML = "Угол между диагоналями φ = " + angle.toFixed(3) + "°";
        output.appendChild(newElement);
    }
    
    return true;
}

function clearData(form) {
    const inputs = document.querySelectorAll('#inputFields input[type="number"]');
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('error');
    }
    
    const calcSelect = document.getElementById('calcSelect');
    for (let i = 0; i < calcSelect.options.length; i++) {
        calcSelect.options[i].selected = false;
    }
    
    clearOutput();
}

function clearOutputOnInput() {
    clearOutput();
}

function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '';
}