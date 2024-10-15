function calcularImc() {
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = (peso / (altura * altura)) * 10000
    if (imc < 18) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Magreza`)
    } else if (imc >= 18 && imc <= 24.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Normal`)
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Sobrepeso`)
    } else if (imc >= 30 && imc <= 34.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Obesidade`)
    } else if (imc >= 35 && imc <= 39.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Obesidade grau 2`)
    } else if (imc >= 40) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Obesidade Mórbida`)
    }
}