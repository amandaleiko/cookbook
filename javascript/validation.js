//email address validation//
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

//password validation//
function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Good password')
return true;
}
else
{ 
alert('Please enter a password that is a minimum for 6 characters, with at least one number, an uppercase and lowercase letter.')
return false;
}
}

var headerBg = document.getElementById('bg')
window.addEventListener('scroll',function(){
  headerBg.style.opacity = 1 - +window.pageYOffset/550+''
  headerBg.style.top = +window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +window.pageYOffset/2+'px'
})