const myButton = document.getElementById('buttonInput');
const number = document.getElementById('inputNumber');
const textLeave = document.getElementById('textOut')


myButton.addEventListener('click', () => {
    if(number.value % 2){
        textLeave.innerHTML = 'impar'
    } else{
        textLeave.innerHTML = 'par'
    }

})







