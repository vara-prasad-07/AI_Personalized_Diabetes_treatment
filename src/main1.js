let signupform=document.getElementById("signupform");
let siginform=document.getElementById("signinform");
let no_of_users=0;
/*signup form dom*/
let signupbtn=document.getElementById("signupbtn");
let username=document.getElementById("username");
let email=document.getElementById("email");
let setpassword=document.getElementById("setpassword");
let confirmpassword=document.getElementById("confirmpassword");
let role=document.getElementById("role");
let male=document.getElementById("male")
let female=document.getElementById("female")
/*signin form dom*/
let signinbtn=document.getElementById("signinbtn");
let emailsignin=document.getElementById("emailin");
let passwordsignin=document.getElementById("passwordin");
let userdetails=[];
let user={};
signupform.addEventListener("submit",function(e){
    e.preventDefault();
})

signinform.addEventListener("submit",function(e){
    e.preventDefault();
})

/*login and signin form dom*/
function openLoginForm() {
    document.getElementById("loginContainer").style.display = "flex";
    document.getElementById("signinContainer").style.display = "none";
  }

  function closeLoginForm() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signinContainer").style.display = "none";
  }
  
  function opensigninForm() {
    document.getElementById("signinContainer").style.display = "flex";
    document.getElementById("loginContainer").style.display = "none";
  }

  function closesigninForm() {
    document.getElementById("signinContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "none";
  }
  

  /*login and signin form dom*/
  signupbtn.onclick=function(){
       no_of_users+=1
       let name=username.value;
       let mail=email.value;
        let pass=setpassword.value;
        let cpass=confirmpassword.value;
        let r=role.value;
        let gend=null;
        if (male.checked){
          gend="male";
        }
        else{
          gend="female"
        }
       if (pass!=cpass){
           alert("password and confirm password should be same")
           return;
       }
        user={userid:no_of_users,name:name,email:mail,password:cpass,role:r,gender:gend}
        userdetails.push(user)
        console.log(userdetails)
        localStorage.setItem("userdetails",JSON.stringify(userdetails))
        alert("user created successfully")
        window.location.href="index.html"
  }

  signinbtn.onclick=function(){
    let emailin=emailsignin.value;
    let passin=passwordsignin.value;
    let user=JSON.parse(localStorage.getItem("userdetails"));
    console.log(user)
    if (emailin==user.email && passin==user.password){
        window.location.href="index.html"
        alert("login successfull")
        
    }
    else{
        alert("login failed")
        return
    }
  }