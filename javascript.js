 
 const username = document.veera.username;
 const email = document.veera.email;


 const usererror = document.querySelector("#usererror")
 
 function veeraFrom(){
   
    if(username.value == "" ||
       email.value == ""){
       alert("please fill all fileds")
       return false;
    }   
 }
 