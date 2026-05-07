import './bigStyle.css';
import './style.css';
import './js/table.js';
import './js/history.js';
import './js/accordion.js';
import './js/cards.js';
import './js/swiperMobileCarousels.js';
import './js/map.js';


//вывод текущего года в футере

const year = new Date().getFullYear();
document.getElementById('footerCopyrightYear').textContent = `© ${year} Parametr`;

    // Отключение hover эффектов на мобильных устройствах
let hoverHandlersAdded = false;

function disableHoverOnMobile() {
  const isMobile = window.innerWidth < 769;
  const body = document.body;

  if (isMobile) {
    // Добавляем класс для отключения hover на мобильных
    body.classList.add("mobile-no-hover");

    // Отключаем hover через обработчик событий (только один раз)
    if (!hoverHandlersAdded) {
      const featureGroups = document.querySelectorAll(".feature.group");
      featureGroups.forEach((group) => {
        const contentDiv = group.querySelector('div[class*="-translate-y-"]');
        const textP = group.querySelector('p[class*="opacity-0"]');

        // Предотвращаем hover эффекты
        group.addEventListener(
          "mouseenter",
          function (e) {
            e.preventDefault();
            e.stopPropagation();
            // Не меняем стили, просто предотвращаем hover
            if (!group.classList.contains("active")) {
              // Оставляем начальное состояние из CSS
              if (contentDiv && contentDiv.style.transform) {
                // Если есть inline стиль от клика, не трогаем его
              } else {
                // Убеждаемся, что нет hover эффекта
                contentDiv.style.transform = "";
              }
            }
          },
          { passive: false }
        );
      });
      hoverHandlersAdded = true;
    }
  } else {
    body.classList.remove("mobile-no-hover");
    hoverHandlersAdded = false;
  }
}

// Обработка клика для feature карточек на мобильных устройствах
let featureClickHandlersInitialized = false;

function initFeatureClickHandlers() {
  // Инициализируем только один раз
  if (featureClickHandlersInitialized) return;

  const featureGroups = document.querySelectorAll(".feature.group");

  featureGroups.forEach((group) => {
    group.addEventListener("click", function () {
      const isMobile = window.innerWidth < 769;
      if (!isMobile) return; // Работает только на мобильных

      const contentDiv = group.querySelector('div[class*="-translate-y-"]');
      const textP = group.querySelector('p[class*="opacity-0"]');

      // Закрываем все остальные карточки
      featureGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          otherGroup.classList.remove("active");
          // Возвращаем в видимое состояние
          const otherContentDiv = otherGroup.querySelector(
            'div[class*="-translate-y-"]'
          );
          const otherTextP = otherGroup.querySelector('p[class*="opacity-0"]');
          if (otherContentDiv) {
            otherContentDiv.style.setProperty(
              "transform",
              "translateY(0)",
              "important"
            );
          }
          if (otherTextP) {
            otherTextP.style.setProperty("opacity", "0", "important"); // Текст прозрачный
          }
        }
      });

      // Переключаем текущую карточку
      const isActive = group.classList.toggle("active");

      if (isActive) {
        // Скрываем карточку - двигаем вверх (translateY(-100px))
        if (contentDiv) {
          contentDiv.style.setProperty(
            "transform",
            "translateY(-100px)",
            "important"
          );
        }
        if (textP) {
          textP.style.setProperty("opacity", "1", "important"); // Текст становится видимым
        }
      } else {
        // Показываем карточку - возвращаем в видимое состояние (translateY(0))
        if (contentDiv) {
          contentDiv.style.setProperty(
            "transform",
            "translateY(0)",
            "important"
          );
        }
        if (textP) {
          textP.style.setProperty("opacity", "0", "important"); // Текст прозрачный
        }
      }
    });
  });

  featureClickHandlersInitialized = true;
}

// Инициализация при загрузке
function initMobileFeatures() {
  disableHoverOnMobile();
  initFeatureClickHandlers();

  // Устанавливаем начальное состояние всех карточек на мобильных
  const isMobile = window.innerWidth < 769;
  if (isMobile) {
    const featureGroups = document.querySelectorAll(".feature.group");
    featureGroups.forEach((group) => {
      const contentDiv = group.querySelector('div[class*="-translate-y-"]');
      const textP = group.querySelector('p[class*="opacity-0"]');
      if (contentDiv && !contentDiv.style.transform) {
        // Устанавливаем начальное видимое состояние только если нет inline стилей
        contentDiv.style.setProperty("transform", "translateY(0)", "important");
      }
      if (textP && !textP.style.opacity) {
        textP.style.setProperty("opacity", "0", "important"); // Текст изначально прозрачный
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileFeatures);
} else {
  initMobileFeatures();
}

// Переинициализация при изменении размера окна
window.addEventListener("resize", function () {
  disableHoverOnMobile();
});