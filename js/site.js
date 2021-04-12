const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_8w11kt6';
//    templateID
//    serviceID

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
       btn.value = 'Send Email';
       Swal.fire({
           title: "Message Sent!",
           text: "I will respond within 24-48 hours!",
           icon: "success",
           button: "Back To Site!",
       })
   }, (err) => {
       btn.value = 'Send Email';
       Swal.fire({
           title: "Error!",
           text: JSON.stringify(err),
           icon: "error",
           button: "Try Again!",
       });










    });
});