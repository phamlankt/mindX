// Hàm tạo ra một thẻ div có chứa số ngôi sao tương ứng với giá trị nhập vào.
function printStars(n) {
    let text = "";
    for (let i = 1; i <= n; i++) {
        text += "*";
    }
    let div_star = document.createElement('div');
    div_star.innerHTML = text;
    return div_star;
}

// Hàm kiểm tra dữ liệu nhập vào
function checkData(a) {
    let return_value = true;
    let return_text = "";
    if (!a) {
        return_text = "Please don't leave the field empty";
        return_value = false;
    } else {
        if (isNaN(a)) {

            return_text = "Please enter a number";
            return_value = false;
        } else {
            if (a < 1 || a > 10) {
                console.log(a);
                return_text = "Số không nằm trong khoảng 1-10";
                return_value = false;
            }
        }
    }
    return [return_value, return_text];
}

// Hàm in ra hình tam giác theo yêu cầu
function numberOneTriangle(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let div_star = printStars(i);
        document.getElementById('tamgiac').appendChild(div_star);
    }
}


let number_input = document.getElementById('number');

// Bắt sự kiện người dùng rời khỏi ô nhập dữ liệu
number_input.onblur = function () {
    if (!checkData(number_input.value)[0]) {
        let warning_el = document.createElement('span');
        warning_el.classList.add('reset');
        warning_el.innerHTML = checkData(number_input.value)[1];
        document.getElementById('number').insertAdjacentElement("afterend", warning_el);
    } else
        numberOneTriangle(number_input.value);
}

// Bắt sự kiện người dùng nhấn vào ô nhập dữ liệu
number_input.onfocus = function () {
    const reset_elms = document.querySelector('.reset');
    if (reset_elms) {
        reset_elms.remove();
    }
    document.getElementById('number').value = "";
    document.getElementById('tamgiac').innerHTML = "";
}

