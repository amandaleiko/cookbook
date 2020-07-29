//email address validation//
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true);
  }else{
    alert("You have entered an invalid email address!");
    return (false);
  }
}

//password validation//
function ValidatePassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
  if(inputtxt.value == document.getElementById("confirmPassword").value){
    //alert('Good password')
    return true;
  }else{
    alert('Passwords do not match!');
    return false;
  }
}
else
{ 
alert('Please enter a password that is a minimum for 6 characters, with at least one number, an uppercase and lowercase letter.')
return false;
}
}

function ValidateForm(e){
  e.preventDefault();
  if(ValidateEmail(document.getElementById("email")) &&
    ValidatePassword(document.getElementById("password")))
    {
      alert('Login Success');
    }
}

var headerBg = document.getElementById('bg')
window.addEventListener('scroll',function(){
  headerBg.style.opacity = 1 - +window.pageYOffset/550+''
  headerBg.style.top = +window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +window.pageYOffset/2+'px'
})

document.getElementById("loginForm").addEventListener("submit", ValidateForm);