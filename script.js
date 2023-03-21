var nome = window.prompt('What is your name?')
window.alert('Welcome! ' + nome)

function bmi(){
    let res = document.getElementById('result')
    let hei = document.getElementById('height')
    let wei = document.getElementById('weight')
    let calc = (wei.value / (hei.value * hei.value)).toFixed(2)
    let classification = ' '
    if(hei.value == 0 || wei.value == 0){
        window.alert('Try again and put some information!')
    }else{
        if(calc <= 18.5){
            classification = "Underweight"
        }else if(calc <= 25){
            classification = "Normal"
        }else if(calc <= 30){
            classification = "Overweight"
        }else if(calc > 30){
            classification = "Obese"
        }
        res.innerHTML = `Your BMI value is: ${calc}, you're ${classification}.`
    }
}