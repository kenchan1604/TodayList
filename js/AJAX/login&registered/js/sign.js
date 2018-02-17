var messagebox = document.querySelector('#messagebox');
var signupbtn = document.querySelector('.signupbtn');
var signinbtn = document.querySelector('.signinbtn');

signupbtn.addEventListener('click',signup,false);
signinbtn.addEventListener('click',signin,false);

function signup(){
    console.log('signup');
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr =  callbackData.message;
        if(veriStr =="帳號註冊成功"){
            messagebox.innerHTML = '<div class="success">帳號註冊成功！</div>';
        }else{
            messagebox.innerHTML = '<div class="fail">帳號註冊失敗！</div>';
            alert("帳號註冊失敗！");
        }
    }
}
function signin(){
    console.log('signin');
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr =  callbackData.message;
        if(veriStr =="登入成功"){
            messagebox.innerHTML = '<div class="success">登入成功！！</div>';
        }else{
            messagebox.innerHTML = '<div class="fail">此帳號不存在或帳號密碼錯誤！</div>';
            alert("此帳號不存在或帳號密碼錯誤！");
        }
    }
}