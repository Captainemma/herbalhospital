burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar-items')
nav=document.querySelector('.nav')

burger.addEventListener('click',()=>{
   navbarItems.classList.toggle('h-class')
   nav.classList.toggle('v-class')
})


  document.getElementById('appointmentForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const statusElement = document.getElementById('formStatus');
    
    // Show loading state
    statusElement.style.display = 'block';
    statusElement.textContent = 'Processing your appointment...';
    statusElement.style.color = 'white';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        statusElement.textContent = 'Appointment booked successfully!';
        statusElement.style.color = 'lightgreen';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      statusElement.textContent = 'Error! Please try again.';
      statusElement.style.color = 'pink';
      console.error('Form submission error:', error);
    } finally {
      setTimeout(() => {
        statusElement.style.display = 'none';
      }, 5000);
    }
  });
