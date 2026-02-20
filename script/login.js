// console.log('cimpelo');
document.getElementById('login-btn')
    .addEventListener('click',function(){
        // 1. get the mobile number
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;
        console.log(contactNumber);

        // 2. get the pin input
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;
        console.log(pin);

        // 3.match pin & mobile number
        if(contactNumber =='01758987068' && pin == '1234'){
        // 3.1 >>if true(match) alert > homepage
        alert('Login Successful.');
        window.location.replace('/home.html')
        }else{
        // 3.2 >>if false(don't match) alert > return 
        alert('Login Failed.');
        return;
        }  

    });