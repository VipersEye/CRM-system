// Добавление пользователя

(function () {
    var btnAddClickHandler = document.querySelector('.btn--add');

    btnAddClickHandler.addEventListener('click', function(evt) {
        evt.preventDefault();

        var data = new FormData();

        var popupAdd = document.querySelector('.popup--add');

        var inputs = popupAdd.querySelectorAll('input');

        console.log(inputs);

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
                    var table = document.querySelector('.data__table');
                    table.insertAdjacentHTML('beforeend', response);
                    popupAdd.classList.remove('popup--active');
                }
        }
        xhr.open("post", "functions/users/user_add.php"); 
        xhr.send(data); 

    });
})();

// Удаление пользователя

(function () {

    var btnRemoveClickHandler = document.querySelectorAll('.remove__icon');

    btnRemoveClickHandler.forEach(item => { 
        item.addEventListener('click', ()=>{
            var td = item.parentElement;
            var tr = td.parentElement;    
            tr.style.display = "none";
    
            var data = new FormData();
    
            var id = tr.querySelector('td').textContent;
    
            data.append("user_id", id);
    
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'text';
            xhr.onreadystatechange = function()
            {
                    if(xhr.readyState == 4 && xhr.status == 200)
                    {
                        var response = xhr.responseText;
                        alert(response);
                    }
            }
            xhr.open("post", "functions/users/user_delete.php"); 
            xhr.send(data); 
        });
    });
})();

// Изменение данных

(function () {


    var td = document.querySelectorAll('td');

    var editIcon = document.querySelector('.edit__icon');

    td.forEach(cell => { 
        if (cell.textContent != "") {
            cell.addEventListener('click', ()=>{
                if (editIcon.classList.contains('edit--active')) {
                    debugger;
                    var popupChange = document.querySelector('.popup--change');
                    var input = popupChange.querySelector('input');
                    var tr = cell.parentElement;
                    input.value = String(cell.textContent);
                    popupChange.classList.add('popup--active');
                    window.cell = cell;
                    window.id = tr.querySelector('td').textContent;
                    window.param = cell.id;
                }
                
            });
        }
    });

    var btnChangeClickHandler = document.querySelector('.btn--change');

    btnChangeClickHandler.addEventListener('click', function (evt) {
        evt.preventDefault();

        var id = window.id;
        var param = window.param;
        var popupChange = document.querySelector('.popup--change');
        var input = popupChange.querySelector('input');
        var val = input.value;
        
        window.cell.textContent = val;
                    
        var data = new FormData();
                    
        data.append("user_id", id);
        data.append("param", param);
        data.append("value", val);

        console.log(data);
                        
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4 && xhr.status == 200)
            {
                var response = xhr.responseText;
                alert(response);
                popupChange.classList.remove('popup--active');
            }
        }
        xhr.open("post", "functions/users/user_change.php"); 
        xhr.send(data);
                        
    });                     

})();

// История заказов 

(function () {
    var users = document.querySelectorAll('.row');

    var popupHistory = document.querySelector('.popup--history');

    users.forEach(element => {
        
        element.addEventListener('click', function () {

            var editIcon = document.querySelector('.edit__icon');
            if (editIcon.classList.contains('edit--active') == false) {
                var data = popupHistory.querySelector('.popup__data');
                var table = data.querySelector('table');
                table.innerHTML = '';

                popupHistory.classList.add('popup--active');

                var id = element.querySelector('td').textContent;

                var data = new FormData();
                        
                data.append("user_id", id);
                                
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'text';
                xhr.onreadystatechange = function()
                {
                    if(xhr.readyState == 4 && xhr.status == 200)
                    {
                        var response = xhr.responseText;
                        
                        var data = popupHistory.querySelector('.popup__data');
                        var table = data.querySelector('table');
                        table.innerHTML = '<tr class="table__head"><th>Заказ №</th><th>Статус</th><th>Дата</th><th>Менеджер</th><th>Описание заказа</th><th>Клиент</th><th>Итого</th></tr><tr class="table__firstrow"><th>Заказ №</th><th>Статус</th><th>Дата</th><th>Менеджер</th><th>Описание заказа</th><th>Клиент</th><th>Итого</th></tr>';
                        table.insertAdjacentHTML('beforeend', response);
                        
                        if (response != "") {
                            var select = data.querySelector('select');

                            if (select.value == "new") {
                                select.style.width = "80px";
                                select.style.backgroundColor = "#87c14f";
                            }
                            
                            if (select.value == "processing") {
                                select.style.width = "120px";
                                select.style.backgroundColor = "#05bad2";
                            }
                            
                            if (select.value == "producting") {
                                select.style.width = "130px";
                                select.style.backgroundColor = "#d41111";
                            }
                        
                            if (select.value == "send") {
                                select.style.width = "150px";
                                select.style.backgroundColor = "#d4a911";
                            }
                        
                            if (select.value == "complete") {
                                select.style.width = "100px";
                                select.style.backgroundColor = "#000000";
                            }
                        }
                    }
                }
                xhr.open("post", "functions/users/user_history.php"); 
                xhr.send(data);
            }
        });
    });

    var btnClose = document.querySelector('.popup__close');

    btnClose.addEventListener('click', function (){
        popupHistory.classList.remove('popup--active');
    });

})();



// Перетаскивание окна

(function () {

    var dragndrop = function (evt) {

        var popup = evt.target;
            var startCoords = {
                x: evt.clientX,
                y: evt.clientY
            };
    
            var onMouseMove = function (moveEvt) {
                moveEvt.preventDefault();
    
                var shift = {
                    x: startCoords.x - moveEvt.clientX,
                    y: startCoords.y - moveEvt.clientY
                };
    
                startCoords = {
                    x: moveEvt.clientX,
                    y: moveEvt.clientY
                };
    
                popup.style.top = (popup.offsetTop - shift.y) + 'px';
                popup.style.left = (popup.offsetLeft - shift.x) + 'px';
            }
    
            var onMouseUp = function (upEvt) {
                upEvt.preventDefault();
    
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }
    
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

    }

    var popupHistory = document.querySelector('.popup--history')
    
    popupHistory.addEventListener('mousedown', dragndrop);

})(); 