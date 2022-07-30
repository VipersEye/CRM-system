// Открытие/Закрытие меню

(function() {
    var menu = document.querySelector('.nav');
    var burgerClickHandler = document.querySelector('.burger');

    burgerClickHandler.addEventListener('click', function() {
        menu.classList.toggle('nav--disable')
    });
})();

// Открытие/Закрытие окна

(function() {
  
    var popupAdd = document.querySelector('.popup--add');

    var popupChange = document.querySelector ('.popup--change');
  
    var btnPopupOpen = document.querySelector('.add__icon');
  
    btnPopupOpen.addEventListener('click', function(evt) {
        popupAdd.classList.add('popup--active');
    });
  
    document.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('btn--cancel')) {
            popupAdd.classList.remove('popup--active');
            popupAdd.style.top = '50%';
            popupAdd.style.left = '50%';

            popupChange.classList.remove('popup--active');
            popupChange.style.top = '50%';
            popupChange.style.left = '50%';
        }
    });
    
  })();

// Поиск по таблице

(function () {
    var dataSearch = document.querySelector('.data__search');

    dataSearch.addEventListener('keydown', function (evt) {
        var rows = document.querySelectorAll('.row');
        console.log(rows);
        var search;
        var text;
        var n = 0;
        for(var i = 0; i < rows.length; i++) {
            n = 0;
            for(var j = 0; j < rows[i].childNodes.length; j++) {
                search = String(dataSearch.value);
                text = String(rows[i].childNodes[j].textContent);
                if (( text.includes(search) && text != "") == true) {
                    n++;
                }
            }
            if (n == 0) {
                rows[i].style.display = "none";
            }
            else rows[i].style.display = "table-row";
        }
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

    var popupAdd = document.querySelector('.popup--add');
    var popupChange = document.querySelector('.popup--change');
    
    popupAdd.addEventListener('mousedown', dragndrop);
    popupChange.addEventListener('mousedown', dragndrop);

})(); 

// Включение режима изменения

(function() {

    var edit = document.querySelector('.edit__icon');

    edit.addEventListener('click', function() {
        edit.classList.toggle('edit--active');

        var remove = document.querySelectorAll('.remove__icon');

        for(var i=0; i < remove.length; i++) {
            remove[i].classList.toggle('remove--active');
        }

        var td = document.querySelectorAll('td');

        for (var i = 0; i < td.length; i++) {
            td[i].classList.toggle('pointer');
        }
    });

})();