// Отрисовка статуса заказа

(function () {

    var select = document.querySelectorAll('.status');

    document.addEventListener('DOMContentLoaded', function() {

        for (var i = 0; i < select.length; i++) {
            if (select[i].name == "Новый") {
                for (var j = 0; j < select[i].options.length; j++) {
                    if (select[i].options[j].value == "new") {
                        select[i].options[j].selected = true;
                    }
                }
            }
    
            if (select[i].name == "В обработке") {
                for (var j = 0; j < select[i].options.length; j++) {
                    if (select[i].options[j].value == "processing") {
                        select[i].options[j].selected = true;
                    }
                }
            }
    
    
            if (select[i].name == "В производстве") {
                for (var j = 0; j < select[i].options.length; j++) {
                    if (select[i].options[j].value == "producting") {
                        select[i].options[j].selected = true;
                    }
                }
            }
    
            if (select[i].name == "Ожидает отправки") {
                for (var j = 0; j < select[i].options.length; j++) {
                    if (select[i].options[j].value == "send") {
                        select[i].options[j].selected = true;
                    }
                }
            }
    
            if (select[i].name == "Выполнен") {
                for (var j = 0; j < select[i].options.length; j++) {
                    if (select[i].options[j].value == "complete") {
                        select[i].options[j].selected = true;
                    }
                }
            }
        }

        for (i = 0; i < select.length; i++) {
            
            if (select[i].value == "new") {
                select[i].style.width = "80px";
                select[i].style.backgroundColor = "#87c14f";
            }
            
            if (select[i].value == "processing") {
                select[i].style.width = "120px";
                select[i].style.backgroundColor = "#05bad2";
            }
            
            if (select[i].value == "producting") {
                select[i].style.width = "130px";
                select[i].style.backgroundColor = "#d41111";
            }
        
            if (select[i].value == "send") {
                select[i].style.width = "150px";
                select[i].style.backgroundColor = "#d4a911";
            }
        
            if (select[i].value == "complete") {
                select[i].style.width = "100px";
                select[i].style.backgroundColor = "#000000";
            }
        }
    });
})();

// Изменение статуса

(function () {

    var select = document.querySelectorAll('.status');

    select.forEach(item => { 
    item.addEventListener('change', ()=>{
        
        var val;
        
        if (item.value == "new") {
            item.style.width = "80px";
            item.style.backgroundColor = "#87c14f";
            val = "Новый";
        }
        
        if (item.value == "processing") {
            item.style.width = "120px";
            item.style.backgroundColor = "#05bad2";
            val = "В обработке";
        }
        
        if (item.value == "producting") {
            item.style.width = "130px";
            item.style.backgroundColor = "#d41111";
            val = "В производстве";
        }
    
        if (item.value == "send") {
            item.style.width = "150px";
            item.style.backgroundColor = "#d4a911";
            val = "Ожидает отправки";
        }
    
        if (item.value == "complete") {
            item.style.width = "100px";
            item.style.backgroundColor = "#000000";
            val = "Выполнен";
        }
        
        var data = new FormData();

        var td = item.parentElement;
        
        var tr = td.parentElement;

        var id = tr.querySelector('td').textContent;
                    
        data.append("order_id", id);
        data.append("param", "order_status");
        data.append("value", val);

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
        xhr.open("post", "functions/orders/order_change.php"); 
        xhr.send(data);

        });
    });
    
})();

// Удаление заказа

(function () {

    var btnRemoveClickHandler = document.querySelectorAll('.remove__icon');

    btnRemoveClickHandler.forEach(item => { 
        item.addEventListener('click', ()=>{
            var td = item.parentElement;
            var tr = td.parentElement;    
            tr.style.display = "none";
    
            var data = new FormData();
    
            var id = tr.querySelector('td').textContent;
    
            data.append("order_id", id);
    
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
            xhr.open("post", "functions/orders/order_delete.php"); 
            xhr.send(data); 
        });
    });
})();


// Изменение данных

(function () {


    var td = document.querySelectorAll('td');
    var editIcon = document.querySelector('.edit__icon');

    td.forEach(cell => { 
        if (cell.textContent != "" && cell.childElementCount == 0) {
            cell.addEventListener('click', ()=>{
                if (editIcon.classList.contains('edit--active')) {
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
                    
        data.append("order_id", id);
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
        xhr.open("post", "functions/orders/order_change.php"); 
        xhr.send(data);
                        
    });                     
})();

// Добавление заказа

(function () {


    var btnPartAdd = document.querySelector('.icon__popup');

    var autoparts = document.querySelector('.popup_autoparts');

    var template = document.querySelector('#autopart').content.querySelector('.popup__item');

    var n = 1;

    btnPartAdd.addEventListener('click', function() {

        var part = template.cloneNode(true);
        var partId = part.querySelector('.input--id');
        var partNum = part.querySelector('.input--num');
        n++;
        partId.name = "part" + n;
        partNum.name = "num" + n; 
        autoparts.appendChild(part);
    });


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

        data.append("num_parts", n);

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
        xhr.open("post", "functions/orders/order_add.php"); 
        xhr.send(data); 
    });
})();