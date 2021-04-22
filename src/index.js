
// converter em Maiusculo

document.getElementById("btnMaiusculo").addEventListener('click', function(){
    
    const textarea = document.querySelector("textarea").value;
    let texto = converterToUpperCase(textarea);

    document.querySelector("textarea").value = ''
    document.querySelector("textarea").value = texto;
     
})

// converter em Minusculo
document.getElementById("btnMinusculo").addEventListener('click', function(){
    
    const textarea = document.querySelector("textarea").value;
    let texto = converterToLowerCase(textarea);

    document.querySelector("textarea").value = ''
    document.querySelector("textarea").value = texto;
     
})

// limpar textarea
document.getElementById("limpar").addEventListener('click', function(){
    document.querySelector("textarea").value = ''
     
})

function converterToUpperCase(value) {
    if (typeof value === 'number') return String(value).toUpperCase();
    if (value === undefined) return '';
    if (String(value).trim() === '') return '';

    return value.split(' ').filter(n => n != '').join(' ').toUpperCase();

}

function converterToLowerCase(value) {

    if (typeof value === 'number') return String(value).toLowerCase();
    if (value === undefined) return '';
    if (String(value).trim() === '') return '';

    return value.split(' ').filter(n => n != '').join(' ').toLowerCase();
}

function reverseString(value) {
    const str = value; //String
    const splitString = str.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
    console.log(joinArray);
    if (str === joinArray) { //Verifica se é palíndrome
        console.log('É palindrome');
    } else {
        console.log('Não É palindrome');
    }
}

console.log(converterToUpperCase('ção'));
console.log(converterToLowerCase('      '));
console.log(reverseString('Paulo'));