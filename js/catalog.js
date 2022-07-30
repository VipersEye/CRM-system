// Добавление запчасти

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
        xhr.open("post", "functions/catalog/part_add.php"); 
        xhr.send(data); 

    });
})();

// Удаление запчасти

(function () {

    var btnRemoveClickHandler = document.querySelectorAll('.remove__icon');

    btnRemoveClickHandler.forEach(item => { 
        item.addEventListener('click', ()=>{
            var td = item.parentElement;
            var tr = td.parentElement;    
            tr.style.display = "none";
    
            var data = new FormData();
    
            var id = tr.querySelector('td').textContent;
    
            data.append("part_id", id);
    
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
            xhr.open("post", "functions/catalog/part_delete.php"); 
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
                    
        data.append("part_id", id);
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
        xhr.open("post", "functions/catalog/part_change.php"); 
        xhr.send(data);
                        
    });                     

})();