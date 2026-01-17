const images = {
    'base-height': '/Users/zemskov/Desktop/laba_7_js/height.png',
    'four-sides': '/Users/zemskov/Desktop/laba_7_js/4sides.png'
};

document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    
    input1.onfocus = clearOutputOnInput;
    input2.onfocus = clearOutputOnInput;
    input3.onfocus = clearOutputOnInput;
    input4.onfocus = clearOutputOnInput;
    
    updateInputFields();
});

function updateInputFields() {
    const type = document.getElementById('dataType').value;
    const image = document.getElementById('trapezoidImage');
    
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    
    const label1 = input1.parentElement;
    const label2 = input2.parentElement;
    const label3 = input3.parentElement;
    const label4 = input4.parentElement;
    
    if (type === 'base-height') {
        label1.innerHTML = 'a (нижнее основание) = ';
        label2.innerHTML = 'h (высота) = ';
        label3.innerHTML = 'α (угол слева, градусы) = ';
        label4.innerHTML = 'β (угол справа, градусы) = ';
        
        label1.appendChild(input1);
        label2.appendChild(input2);
        label3.appendChild(input3);
        label4.appendChild(input4);
        
        image.src = images['base-height'];
        image.alt = 'Трапеция с основанием, высотой и углами';
    } else {

        label1.innerHTML = 'a (нижнее основание) = ';
        label2.innerHTML = 'b (верхнее основание) = ';
        label3.innerHTML = 'c (левая сторона) = ';
        label4.innerHTML = 'd (правая сторона) = ';
        
        label1.appendChild(input1);
        label2.appendChild(input2);
        label3.appendChild(input3);
        label4.appendChild(input4);
        
        image.src = images['four-sides'];
        image.alt = 'Трапеция с четырьмя сторонами';
    }
    
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    
    clearOutput();
}

function calculate(data) {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = function() {
            this.classList.remove('error');
        };
    }
    
    const output = document.getElementById('output');
    output.innerHTML = "<p>Результат:</p>";
    
    const calcSelect = document.getElementById('calcSelect');
    const selectedOptions = [];
    
    const options = calcSelect.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            selectedOptions.push(options[i].value);
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
        a = parseFloat(document.getElementById('input1').value);
        h = parseFloat(document.getElementById('input2').value);
        alpha = parseFloat(document.getElementById('input3').value);
        beta = parseFloat(document.getElementById('input4').value);
        
        if (isNaN(a) || a <= 0) {
            document.getElementById('input1').classList.add("error");
            isValid = false;
        }
        if (isNaN(h) || h <= 0) {
            document.getElementById('input2').classList.add("error");
            isValid = false;
        }
        if (isNaN(alpha) || alpha <= 0 || alpha >= 180) {
            document.getElementById('input3').classList.add("error");
            isValid = false;
        }
        if (isNaN(beta) || beta <= 0 || beta >= 180) {
            document.getElementById('input4').classList.add("error");
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
        a = parseFloat(document.getElementById('input1').value);
        b = parseFloat(document.getElementById('input2').value);
        c = parseFloat(document.getElementById('input3').value);
        d = parseFloat(document.getElementById('input4').value);
        
        if (isNaN(a) || a <= 0) {
            document.getElementById('input1').classList.add("error");
            isValid = false;
        }
        if (isNaN(b) || b <= 0) {
            document.getElementById('input2').classList.add("error");
            isValid = false;
        }
        if (isNaN(c) || c <= 0) {
            document.getElementById('input3').classList.add("error");
            isValid = false;
        }
        if (isNaN(d) || d <= 0) {
            document.getElementById('input4').classList.add("error");
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

    if (selectedOptions.includes('area')) {
        const area = 0.5 * (a + b) * h;
        const newElement = document.createElement('p');
        newElement.innerHTML = "Площадь S = " + area.toFixed(3) + " см²";
        output.appendChild(newElement);
    }
    
    if (selectedOptions.includes('perimeter')) {
        const perimeter = a + b + c + d;
        const newElement = document.createElement('p');
        newElement.innerHTML = "Периметр P = " + perimeter.toFixed(3) + " см";
        output.appendChild(newElement);
    }
    
    if (selectedOptions.includes('diagonals')) {
        const d1 = Math.sqrt(a*a + d*d - 2*a*d*Math.cos(beta * Math.PI/180));
        const d2 = Math.sqrt(a*a + c*c - 2*a*c*Math.cos(alpha * Math.PI/180));
        
        const newElement1 = document.createElement('p');
        newElement1.innerHTML = "Диагональ d₁ = " + d1.toFixed(3) + " см";
        output.appendChild(newElement1);
        
        const newElement2 = document.createElement('p');
        newElement2.innerHTML = "Диагональ d₂ = " + d2.toFixed(3) + " см";
        output.appendChild(newElement2);
    }
    
    if (selectedOptions.includes('diagonalAngle')) {
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

function clearData(data) {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('error');
    }
    
    const calcSelect = document.getElementById('calcSelect');
    const options = calcSelect.options;
    
    for (let i = 0; i < options.length; i++) {
        options[i].selected = false;
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