var modal2 = document.getElementById("myModal2");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Получить элемент <span>, который закрывает модальный
var span2 = document.getElementsByClassName("close2")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span2.onclick = function() {
  modal2.style.display = "none";
}