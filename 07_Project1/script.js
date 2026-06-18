const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener('click', (event) =>{
        if(event.target.id === 'pastelPink'){
            body.style.backgroundColor = '#F9B2D7';
        }
        if(event.target.id === 'pastelBlue'){
            body.style.backgroundColor = '#81A6C6';
        }
        if(event.target.id === 'pastelYellow'){
            body.style.backgroundColor = '#A2CB8B';
        }
        if(event.target.id === 'pastelPurple'){
            body.style.backgroundColor = '#AC87C5';
        }
    })
})