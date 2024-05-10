
//FUNCTION BMI CALC
function bmiCalc(){
    var bmiCalcCount
    const height = parseInt(document.getElementById('inputHeight').value)
    const weight = parseInt(document.getElementById('inputWeight').value)

    bmiCalcCount = (weight / Math.pow((height/100),2)).toFixed(2)
    console.log('TEST', bmiCalcCount)

    document.getElementById('resultBmi').textContent = bmiCalcCount

   

    if(bmiCalcCount < 17){
        indicator = 'Kurang Berat'
    }else if(bmiCalcCount >= 17 && bmiCalcCount <= 18.5){
        indicator = 'Kurus'
    }else if(bmiCalcCount >= 18.5 && bmiCalcCount <= 25){
        indicator = 'Normal'
    }else if(bmiCalcCount >= 25 && bmiCalcCount <= 27){
        indicator = 'Gemuk'
    }else{
        indicator = 'Obesitas'
    }

    document.getElementById('resultIndicator').textContent = indicator
}