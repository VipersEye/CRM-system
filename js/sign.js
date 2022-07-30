// Функция авторизации

(function () {

    var signBtn = document.querySelector('.btn--sign');

    signBtn.addEventListener('click', function (evt) {

        evt.preventDefault();

        var data = new FormData();

        var form = document.querySelector('#formLog');

        var inputs = form.querySelectorAll('input');

        for(var i = 0; i < inputs.length; i++)
        {
            data.append(inputs[i].name, inputs[i].value);
        }

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4 && xhr.status == 200)
            {
                var response = xhr.responseText;
                
                if (response == "sotr" || response == "user") {
                    document.location.href = "http://localhost/menu.php";
                }

                if (response == "error") {
                    alert("Неправильно введен логин или пароль");
                }
                
            }
        }
        xhr.open("post", "functions/sign/sign.php"); 
        xhr.send(data);
    });

})();

// Открытие/Закрытие окна регистрации

(function (){

    var btnReg = document.querySelector('.btn__regform');
    var btnLog = document.querySelector('.btn__loginform');
    var loginForm = document.querySelector('.login__form');
    var formLog = document.querySelector('#formLog');
    var formReg = document.querySelector('#formReg');

    btnReg.addEventListener('click', function () {
        
        loginForm.classList.add('registration');
        formLog.classList.add('visually-hidden');
        formReg.classList.remove('visually-hidden');
    });

    btnLog.addEventListener('click', function () {

        loginForm.classList.remove('registration');
        formLog.classList.remove('visually-hidden');
        formReg.classList.add('visually-hidden');

    });

})();

// Регистрация

(function (){

    var btnRegistration = document.querySelector('.btn--registration');

    btnRegistration.addEventListener('click', function (evt) {
        
        evt.preventDefault();

        var data = new FormData();

        var form = document.querySelector('#formReg');

        var inputs = form.querySelectorAll('input');

        for(var i = 0; i < inputs.length; i++)
        {
            data.append(inputs[i].name, inputs[i].value);
        }

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.onreadystatechange = function()
        {
                if(xhr.readyState == 4 && xhr.status == 200)
                {
                    var response = xhr.responseText;
                    document.location.href = "http://localhost/menu.php";
                }
        }
        xhr.open("post", "functions/sign/registration.php"); 
        xhr.send(data); 
    });

})();