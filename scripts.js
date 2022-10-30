
document.addEventListener('submit',(e)=>{
    e.preventDefault();
var value1 =document.getElementById('email').value;
if(value1 == ''){
    document.getElementsByClassName('message')[0].innerText="Please enter a valid email address";
}
else
document.getElementsByClassName('message')[0].innerText="Thank you! Your email address "+value1+" has been added to our mailing list!";
});
