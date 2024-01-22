let formSubmit = document.getElementById('waitlist-form'),
    email = document.getElementById('email'),
    password1 = document.getElementById('password'),
    password2 = document.getElementById('pswd-verify'),
    fullName = document.getElementById('fullName');


//function to verify if the user has entered a valid email address

function emailValidation(field){
    let emailRegex = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/; //refers to regular expressions

    if(!email.value.match(emailRegex)){
        email.nextElementSibling.innerHTML='please enter a valid email address';
        field.preventDefault();
        return false;

    }else{
        email.nextElementSibling.innerHTML='';
        return true;
    }
}


//function to verify if the user has entered a valid email address
function matchPassword() {  

    if(password1 !== password2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("good, you're good to go, see you in the next few minutes");  
    }  
} 

function validateFunction(e) {
//call to the function required taking in event e and an element to verify
    required(email,e);
    required(password,e);
    required(fullName,e);    

    //call to email validation function
    emailValidation(e);

    //call to password validation function
    matchPassword(e);

    return true;
}

//fucntion to validate that if a field is empty, we display some error message and block sbmitting
function required(field, event){
    if(field.value ===''){
        field.nextElementSibling.innerHTML="this field is required"; //refering the span block
        event.preventDefault(); //prevent form from submitting by default
        return false;
    }else{
        field.nextElementSibling.innerHTML="";
        return true;
    }

}

formSubmit.addEventListener('submit',validateFunction)
