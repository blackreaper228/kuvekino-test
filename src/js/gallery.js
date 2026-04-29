// попап галереи

(function () {
  "use strict";

  // Создаем попап при загрузке страницы
  function createGalleryPopup() {
    // Проверяем, не создан ли уже попап
    if (document.getElementById("galleryPopup")) {
      return;
    }

    // Создаем HTML для попапа
    const popupHTML = `
        <div id="galleryPopup" style="
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 999999999999;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        ">
          <img id="galleryPopupImage" src="" alt="" style="
            object-fit: contain;
          ">
        </div>
      `;

    // Добавляем попап в body
    document.body.insertAdjacentHTML("beforeend", popupHTML);

    const popup = document.getElementById("galleryPopup");
    const popupImage = document.getElementById("galleryPopupImage");

    // Закрытие попапа при клике
    popup.addEventListener("click", function () {
      popup.style.display = "none";
      popupImage.src = "";
    });

    // Закрытие попапа при нажатии Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && popup.style.display === "flex") {
        popup.style.display = "none";
        popupImage.src = "";
      }
    });
  }

  // Инициализация обработчиков кликов для галереи
  function initGalleryPopup() {
    const galleryItems = document.querySelectorAll(".M_HistoryItemG");

    galleryItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        // Проверяем размер экрана
        if (window.innerWidth < 460) {
          return;
        }

        // Находим изображение внутри кликнутого элемента
        const image = this.querySelector(".A_HistoryItemImage");

        if (image && image.src) {
          const popup = document.getElementById("galleryPopup");
          const popupImage = document.getElementById("galleryPopupImage");

          // Устанавливаем источник изображения
          popupImage.src = image.src;

          // Показываем попап
          popup.style.display = "flex";

          console.log("Открыт попап с изображением:", image.src);
        }
      });
    });

    console.log(
      `✅ Инициализировано ${galleryItems.length} элементов галереи для попапа`
    );
  }

  // Автоматическая инициализация при загрузке страницы
  document.addEventListener("DOMContentLoaded", function () {
    createGalleryPopup();
    initGalleryPopup();
  });

  // Делаем функцию доступной глобально для переинициализации
  window.initGalleryPopup = function () {
    createGalleryPopup();
    initGalleryPopup();
  };
})();
