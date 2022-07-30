// Удаление отзыва

(function () {

    var btnRemoveClickHandler = document.querySelectorAll('.remove__icon');

    btnRemoveClickHandler.forEach(item => { 
        item.addEventListener('click', ()=>{
            var td = item.parentElement;
            var tr = td.parentElement;    
            tr.style.display = "none";
    
            var data = new FormData();
    
            var id = tr.querySelector('td').textContent;
    
            data.append("review_id", id);
    
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
            xhr.open("post", "functions/reviews/review_delete.php"); 
            xhr.send(data); 
        });
    });
})();

// Добавление отзыва 

(function () {
    var btnAddClickHandler = document.querySelector('.btn--add');

    btnAddClickHandler.addEventListener('click', function(evt) {
        evt.preventDefault();

        var data = new FormData();

        var popupAdd = document.querySelector('.popup--add');

        var inputs = popupAdd.querySelectorAll('input');

        var id = document.querySelector('.data__add').id;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var day = dd + '.' + mm + '.' + yyyy;

        data.append('review_date', day);
        data.append('user_id', id);

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
        xhr.open("post", "functions/reviews/review_add.php"); 
        xhr.send(data); 

    });
})();