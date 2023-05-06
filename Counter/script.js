const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true
})


let decreaseButton = document.querySelector('.minus');
let increaseButton = document.querySelector('.plus');
let valueBox = document.querySelector('.valueBox');
let intervalBetweenOperations = null;
let isIncrease = false;
let isDecrease = false;
let value = 0;

function reset() {
    if (isIncrease || isDecrease) {
        Toast.fire({
            icon: 'error',
            title: 'Stop the counter first'
        })
    }
    else {
        value = 1;
        valueBox.value = value;
    }
}

function decrease() {
    value--;
    valueBox.value = value;
}

function increase() {
    value++;
    valueBox.value = value;
}

increaseButton.addEventListener('mousedown', () => {
    if (isDecrease) {
        Toast.fire({
            icon: 'error',
            title: 'First you need to stop your reduction counter'
        })
    }
    else {
        if (!isIncrease) {
            isIncrease = true;
            increaseButton.style.borderRadius = "50%";
            intervalBetweenOperations = setInterval(increase, 500);
        }
        else {
            isIncrease = false;
            increaseButton.style.borderRadius = '';
            clearInterval(intervalBetweenOperations);
        }
    }
})

decreaseButton.addEventListener('mousedown', () => {
    if (isIncrease) {
        Toast.fire({
            icon: 'error',
            title: 'First you have to stop the growth counter'
        })
    }
    else {
        if (!isDecrease) {
            isDecrease = true;
            decreaseButton.style.borderRadius = "50%";
            intervalBetweenOperations = setInterval(decrease, 500);
        }
        else {
            isDecrease = false;
            decreaseButton.style.borderRadius = '';
            clearInterval(intervalBetweenOperations);
        }
    }
})


