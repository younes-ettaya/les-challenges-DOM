const button = document.getElementById("toggle-btn");
const details = document.getElementById("details");

button.addEventListener('click', function (){
    details.removeAttribute('style');
})

