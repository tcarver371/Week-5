/*
    Trevor Carver
    9/22/19
    CITPT 175
    Week 5 Validator

    The goal of this assignment is to create a simple form and have the data be validated via the validator plugin.


*/





$(document).ready(function(){

    $("#firstname").focus();
    //Call the validate method
    $("#signupForm").validate({
        //sets the rules for the validator 
        rules:{
            //Makes the first name a required field
            firstname: {
                required: true,          
            },
            //Makes the last name a required field
            lastname:{
                required: true,
            },
            //Makes the username a required field and also makes it to where it has to be a minimum of 6 characters and a max of 15
            username:{
                required: true,
                minlength: 6,
                maxlength: 15
            },
            //Makes the password a required field and sets the minimum length to 8 characters
            password:{
                required: true,
                minlength: 8
            }, 
            //Makes the password a required field and sets the minimum length to 8 characters
            //Also makes sure the passwords match by using equalTo
            confirm_password:{
                required: true,
                minlength: 8,
                equalTo:"#password"
            },  
            //Makes the email a required field and checks to see if it's a valid email   
            email:{
                required: true,
                email: true
            }
        },
        //Sets the output messages for the rules 
        //Feel like this is pretty self-explanatory and doesn't need much more explaining.
        messages:{
            firstname: {
                required: "Please enter your First Name"       
            },
            lastname:{
                required: "Please enter your Last Name"
            },
            username:{
                required: "Please enter a username",
                minlength: "Your username must be more than 6 characters",
                maxlength: "Your username cannot exceed 15 characters"
            },
            password:{
                required: "Please enter a password",
                minlength: "Your password must contain more than 8 characters"
            },
            confirm_password:{
                required: "Please enter a password",
                minlength: "Your password must contain more than 8 characters",
                equalTo: "Your Passwords do not match"

            },
            email:{
                required: "Please enter your Email",
                email: "Please enter a VALID email"
            }
        }
    });
})
