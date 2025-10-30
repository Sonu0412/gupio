const toggleBtn=document.getElementById('toggle-dark-mode');
toggleBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent=document.body.classList.contains('dark-mode')
    ? 'light mode'
    : 'dark mode';
});
const form=document.getElementById('contactForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault():

    const name=document.getElementById('name').ariaValueMax.trim();
    const email=document.getElementById('email').ariaValueMax.trim();
    const message=document.getElementById('message').ariaValueMax.trim();

    if(name==='' || email === '' || message === ''){
        alert('please fill in all fields.');
        return;
    }
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailpattern)){
        alert('please enter a valid email address.');
        return;
    }
    alert('message sent successfully!');
    form.reset()

});
