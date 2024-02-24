const form=document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)  --> isme empty value store ho jayegi

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    // results.innerHTML = `${height}`;
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        let bmiCategory = '';
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Normal weight';
        } else {
            bmiCategory = 'Overweight';
        }
        // Show the result
        results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${bmiCategory}</span>`;
    }

    
});