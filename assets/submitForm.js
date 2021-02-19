function submitForm(){
    const form = document.querySelector('form');    
    form.addEventListener('submit', async (e) => {    
        e.preventDefault();
        const {first, last, email, message_area} = e.target.elements;
        const formData = {first:first.value, last:last.value, email:email.value, message:message_area.value}
        console.log(formData)
        console.log(form)
        form.reset()
        await axios.post('https://getform.io/f/f6d3318a-07bb-4398-8726-356fa6357d23', formData)
    })
    
}

submitForm()