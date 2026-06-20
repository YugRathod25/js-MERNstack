const form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === ' ' || height < 0 || isNaN(height)){
        result.innerHTML = "please give a valid height"
    }
    else if(weight === ' ' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if (bmi <= 18.6){
            result.innerHTML = `Your BMI is <span>${bmi}</span>. Eat more food, you are underweight.`
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            result.innerHTML = `Your BMI is <span>${bmi}</span>. Good food intake, you are perfectly healthy.`
        }
        else{
            result.innerHTML = `Your BMI is <span>${bmi}</span>. Work on your diet, you are getting sooo heavy.`
        }
    }
})