
// Kiểm tra một số có phải là số nguyên tố hay không 
function isSoNguyenTo(x) {
    let return_value = true;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return_value = false;
            break;
        }
    }

    return return_value;
}

// Kiểm tra có dữ liệu nhập vào hay không và nếu có thì dữ liệu nhập vào có phải là số 
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
        }
    }
    return [return_value, return_text];
}

// đặt sự kiện onclick để tính tổng
document.getElementById('sum_btn').onclick = function () {
    const numbera = document.getElementById('numbera').value;
    const numberb = document.getElementById('numberb').value;
    let numbera_warning = document.createElement('span');
    numbera_warning.classList.add('reset');
    let numberb_warning = document.createElement('span');
    numberb_warning.classList.add('reset');
    let sum = 0;

    if (checkData(numbera)[0] && checkData(numberb)[0]) {

        if (Number(numbera) >= Number(numberb)) {

            numbera_warning.innerHTML = "Number a must be smaller than number b"
            numbera_warning.style.color = 'red';
            // console.log(numbera_warning)
            // chèn warning nếu số a vi phạm, lớn hơn hoặc bằng số b
            document.getElementById('numbera').insertAdjacentElement("afterend", numbera_warning);


        } else {

            for (let i = Number(numbera); i <= Number(numberb); i++) {
                if (isSoNguyenTo(i)) {
                    // console.log(i);
                    sum += i;
                    document.getElementById('ketqua').innerHTML = "Tổng các số nguyên tố từ a đến b là: <strong>" + sum + "</strong>";
                }
            }
        }
    } else {
        numbera_warning.innerHTML = checkData(numbera)[1];
        numberb_warning.innerHTML = checkData(numberb)[1];
        // console.log(numbera_warning.innerHTML)
        // console.log(numberb_warning.innerHTML)
    };



    if (numberb_warning.innerHTML) {
        numberb_warning.style.color = 'red';
        // chèn warning nếu số b vi phạm điều kiện kiểm tra
        document.getElementById('numberb').insertAdjacentElement("afterend", numberb_warning);
    }

    if (numbera_warning.innerHTML) {
        numbera_warning.style.color = 'red';
        // chèn warning nếu số a vi phạm điều kiện kiểm tra
        document.getElementById('numbera').insertAdjacentElement("afterend", numbera_warning);
    }

    if (!numbera_warning && !numbera_warning) {
        document.getElementById('ketqua').innerHTML = "Tổng các số nguyên tố từ a đến b: <strong>" + sum + "</strong>";
    }
}

// đặt sự kiện onclick để xóa các trường dữ liệu đã nhập
document.getElementById('reset_btn').onclick = function () {
    const reset_elms = document.querySelectorAll('.reset');
    for (const elm of reset_elms) {
        elm.value = "";
        const warning_fiels = document.querySelectorAll('span.reset');
        if (warning_fiels) {
            for (const field of warning_fiels)
                field.remove();
        }

        document.getElementById('ketqua').innerHTML = "Tổng các số nguyên tố từ a đến b là:";
    }
}