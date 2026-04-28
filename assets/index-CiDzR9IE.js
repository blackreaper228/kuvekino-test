(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`1CSeA_83ijKQOHEIa1b3w_3T0_llMXneEY4QzymspwsE`,t=[`https://docs.google.com/spreadsheets/d/${e}/export?format=csv&gid=0`,`https://docs.google.com/spreadsheets/d/${e}/export?format=csv`,`https://docs.google.com/spreadsheets/d/${e}/gviz/tq?tqx=out:csv&gid=0`,`https://docs.google.com/spreadsheets/d/${e}/gviz/tq?tqx=out:csv`],n=[],r=10,i=10;async function a(){for(let e=0;e<t.length;e++){let n=t[e];try{let e=await fetch(n,{method:`GET`,headers:{Accept:`text/csv,text/plain,*/*`},mode:`cors`,redirect:`follow`});if(!e.ok)continue;let t=await e.text();if(!t||t.trim().length===0||t.trim().startsWith(`<`))continue;let r=o(t);if(r.length>0)return r}catch{continue}}return[]}function o(e){let t=e.trim().split(`
`);if(t.length===0)return[];let n=s(t[0]),r=[];for(let e=1;e<t.length;e++){let i=s(t[e]);if(i.some(e=>e.trim()!==``)){let e={};n.forEach((t,n)=>{e[t]=i[n]||``}),r.push(e)}}return r}function s(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];a===`"`?r&&e[i+1]===`"`?(n+=`"`,i++):r=!r:a===`,`&&!r?(t.push(n.trim()),n=``):n+=a}return t.push(n.trim()),t}function c(e){return e.map(e=>{let t=Object.keys(e);return{building:e[t[0]]||e.Здание||``,area:e[t[1]]||e.Площадь||``,docks:e[t[2]]||e.Доки||``,parking:e[t[3]]||e.Парковка||``,date:e[t[4]]||e.Дата||``,price:e[t[5]]||e.Стоимость||``}})}function l(e){return`
    <div class="A_TableRow">
      <div class="A_TableContent U_Uppercase U_First U_MobileHide">${e.building}</div>
      <div class="A_TableContent U_Uppercase U_Second">${e.area}</div>
      <div class="A_TableContent U_Uppercase U_Third U_MobileHide">${e.docks}</div>
      <div class="A_TableContent U_Uppercase U_Fourth U_MobileHide">${e.parking}</div>
      <div class="A_TableContent U_Uppercase U_Third U_MobileHide">${e.date}</div>
      <div class="A_TableContent U_Uppercase U_Fifth">${e.price}</div>
    </div>
  `}function u(e,t=`propertyTable`){let n=document.getElementById(t);n.innerHTML=`
    <div class="W_TableForPhoneScroll">
      <div class="W_MainTable">
        <div class="A_TableRow U_TableRowHug">
          <div class="A_TableContent U_ProjectColor U_Uppercase U_First U_MobileHide">Здание</div>
          <div class="A_TableContent U_ProjectColor U_Uppercase U_Second">площадь<br>помещения</div>
          <div class="A_TableContent U_ProjectColor U_Uppercase U_Third U_MobileHide">Количество<br>доков | ворот</div>
          <div class="A_TableContent U_ProjectColor U_Uppercase U_Fourth U_MobileHide">Формат</div>
          <div class="A_TableContent U_ProjectColor U_Uppercase U_Third U_MobileHide">Дата готовности</div>
          <div class="A_TableContent U_ProjectColor U_Uppercase U_Fifth">стоимость</div>
        </div>
        ${e.slice(0,r).map(l).join(``)}
      </div>
    </div>
    ${e.length>r?`<div class="W_TableButton"><div class="A_Button U_Secondary" onclick="showMoreRows()">Показать еще</div></div>`:``}
  `}function d(){r+=i,u(n,`propertyTable`)}window.showMoreRows=d;async function f(){try{n=c(await a()),r=10,u(n,`propertyTable`)}catch{}}window.refreshTableData=async function(){await f()},document.addEventListener(`DOMContentLoaded`,f),document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,f):f(),(function(){let e=`1CSeA_83ijKQOHEIa1b3w_3T0_llMXneEY4QzymspwsE`,t=[`https://docs.google.com/spreadsheets/d/${e}/export?format=csv&gid=151892420`,`https://docs.google.com/spreadsheets/d/${e}/gviz/tq?tqx=out:csv&gid=151892420`];function n(e){return/^https?:\/\/|^\/\//i.test(e||``)}function r(e){return n(e)&&/\.(webp|jpg|jpeg|png|gif|svg)(\?.*)?$/i.test(e)}function i(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}function a(){return new Promise(t=>{console.log(`???? Пробуем альтернативный метод загрузки через JSONP...`);let n=document.createElement(`script`),r=`historyCallback_`+Date.now();window[r]=function(e){console.log(`???? Получены данные через JSONP:`,e),document.head.removeChild(n),delete window[r],e&&e.table&&e.table.rows?t(l(o(e))):t([])},n.src=`https://docs.google.com/spreadsheets/d/${e}/gviz/tq?gid=151892420&tqx=out:json&tq&callback=${r}`,n.onerror=()=>{console.error(`❌ JSONP метод не сработал`),document.head.removeChild(n),delete window[r],t([])},document.head.appendChild(n)})}function o(e){if(!e.table||!e.table.rows)return``;let t=e.table.rows,n=[];return t.forEach(e=>{let t=[];e.c&&e.c.forEach(e=>{e&&e.v!==null&&e.v!==void 0?t.push(`"`+String(e.v).replace(/"/g,`""`)+`"`):t.push(``)}),n.push(t.join(`,`))}),n.join(`
`)}let s=[];async function c(){console.log(`???? Начинаем загрузку данных истории...`);for(let e=0;e<t.length;e++){let n=t[e];console.log(`???? Пробуем URL ${e+1}:`,n);try{let t=await fetch(n,{method:`GET`,headers:{Accept:`text/csv,text/plain,*/*`},mode:`cors`,redirect:`follow`});if(console.log(`???? Ответ от URL ${e+1}:`,t.status,t.statusText),!t.ok){console.log(`❌ URL ${e+1} не отвечает`);continue}let r=await t.text();if(console.log(`???? Данные от URL ${e+1}:`,r.substring(0,200)+`...`),!r||r.trim().length===0){console.log(`❌ URL ${e+1} вернул пустые данные`);continue}if(r.trim().startsWith(`<`)){console.log(`❌ URL ${e+1} вернул HTML вместо CSV`);continue}let i=l(r);if(console.log(`✅ Обработанные данные от URL ${e+1}:`,i),i.length>0)return i}catch(t){console.error(`❌ Ошибка при загрузке URL ${e+1}:`,t);continue}}return console.log(`❌ Все URL не сработали`),[]}function l(e){let t=e.trim().split(`
`);if(t.length===0)return[];let n=u(t[0]),r=[];for(let e=1;e<t.length;e++){let i=u(t[e]);if(i.some(e=>e.trim()!==``)){let e={};n.forEach((t,n)=>{e[t]=i[n]||``}),r.push(e)}}return r}function u(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];a===`"`?r&&e[i+1]===`"`?(n+=`"`,i++):r=!r:a===`,`&&!r?(t.push(n.trim()),n=``):n+=a}return t.push(n.trim()),t}function d(e){return e.map((e,t)=>{let n=Object.keys(e),i=(e,t)=>n.find(t=>e.test((t||``).trim()))||t||null,a=i(/^(год|year)$/i,n[0]),o=i(/^(месяц|month)$/i,n[1]),s=i(/^(описание|description)$/i,null);!s&&n[2]&&(r((e[n[2]]||``).trim())||(s=n[2]));let c=[];n.forEach(t=>{if(t===a||t===o||t===s)return;let n=(e[t]||``).trim();r(n)&&c.push(n)});let l=(e[a]||`2025`).toString(),u=(e[o]||``).toString();return{id:t,month:u,year:l,monthName:u,description:s?(e[s]||``).toString().trim():``,mainImage:c[0]||``,images:c}})}function f(e,t=`O_History`){console.log(`???? Рендерим список истории для ${t}:`,e);let n=document.getElementById(t);if(!n){console.error(`❌ Контейнер с ID "${t}" не найден`);return}console.log(`✅ Контейнер ${t} найден:`,n),n.innerHTML=`
      <div class="W_RowHistoryTitleButton U_Padding">
        <h2 class="A_SectionTitle">Ход строительства</h2>
        <div class="W_RowHistoryButton">
          <div class="A_Arrow U_LeftHistory">
            <img class="Q_ImageIcon" src="https://optim.tildacdn.com/tild6266-6439-4136-b839-316239636237/-/resize/700x/-/format/webp/arrow-Left.png" alt="">
          </div>
          <div class="A_Arrow U_RightHistory">
            <img class="Q_ImageIcon" src="https://optim.tildacdn.com/tild3638-3031-4436-b861-373431666664/-/resize/700x/-/format/webp/arrow-Right.png" alt="">
          </div>
        </div>
      </div>
      <div class="W_RowHistory" style="transform: translateX(0px);">
        ${e.map(e=>`
      <div class="M_HistoryItem" id="${e.id}">
        <img class="A_HistoryItemImage" src="${e.mainImage}" alt="">
        <div class="W_HistoryItemRow">
          <p class="A_HistoryItemText">
            ${e.monthName}<br><span class="A_HistoryItemTextYear">${e.year}</span>
          </p>
          <div class="A_HistoryPlusWrapper">
            <img class="A_HistoryItemPlusIcon" src="https://optim.tildacdn.com/tild3832-3232-4461-a536-646564333339/-/resize/288x/-/format/webp/cross.png" alt="">
          </div>
        </div>
      </div>
    `).join(``)}
      </div>
    `,console.log(`✅ HTML успешно установлен для ${t}`)}function p(e,t=`O_HistoryInside`){let n=document.getElementById(t);if(!n){console.error(`Контейнер с ID "${t}" не найден`);return}n.innerHTML=e.map((e,t)=>{let n=e.images.map(e=>`<img src="${e}" alt="" style="flex-shrink: 0; width: 100%;">`).join(``),r=e.description?`<p class="A_HistoryDescriptionText">${i(e.description).replace(/\n/g,`<br>`)}</p>`:``;return`
        <div class="M_HistoryInsideItem" id="${e.id}">
          <div class="M_HistoryInsideItemTitleAndButton">
            <p class="A_HistoryItemText">
              ${e.monthName}<br><span class="A_HistoryItemTextYear">${e.year}</span>
            </p>
            <div class="A_CloseButton">
              <img class="Q_Cross" src="https://optim.tildacdn.com/tild3832-3232-4461-a536-646564333339/-/resize/288x/-/format/webp/cross.png" alt="">
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px;">
              <p style="line-height: 120%; font-size: 16px;">${r}</p>
          <div class="M_HistoryInsideItemSlider">
            <div class="M_HistoryInsideItemSliderImages" id="${e.id}" style="transform: translateX(0%);">
              ${n}
            </div>
            <div class="M_NavButtonsHistory">
              <img class="A_AngleHistory" src="https://optim.tildacdn.com/tild3538-3565-4331-a466-623539363564/-/resize/718x/-/format/webp/Angle.png" alt="">
              <div class="A_Arrow U_LeftHistoryInsideItem" id="${e.id}">
                <img class="Q_ImageIcon" src="https://optim.tildacdn.com/tild6266-6439-4136-b839-316239636237/-/resize/700x/-/format/webp/arrow-Left.png" alt="">
              </div>
              <div class="A_Arrow U_RightHistoryInsideItem" id="${e.id}">
                <img class="Q_ImageIcon" src="https://optim.tildacdn.com/tild3638-3031-4436-b861-373431666664/-/resize/700x/-/format/webp/arrow-Right.png" alt="">
              </div>
            </div>
          </div>
        </div>
        </div>
      `}).join(``)}function m(e,t=`Ошибка загрузки истории`){let n=document.getElementById(e);n&&(n.innerHTML=`
        <div style="text-align: center; padding: 20px; color: red;">
          <p>${t}</p>
        </div>
      `)}function h(){let e=document.querySelector(`.W_RowHistory`),t=document.querySelector(`.U_LeftHistory`),n=document.querySelector(`.U_RightHistory`);if(e&&t&&n){let r=0;e.style.transform=`translateX(${r}px)`;function i(){let t=e.children[0];if(!t)return 300;let n=window.getComputedStyle(t),r=t.offsetWidth,i=parseInt(n.marginLeft,10)||0,a=parseInt(n.marginRight,10)||0;return r+i+a}function a(){let t=e.parentElement.offsetWidth;return-(e.scrollWidth-t)}t.addEventListener(`click`,function(){let t=i(),n=r+t;n<=0?(r=n,e.style.transform=`translateX(${r}px)`,console.log(`⬅️ История: сдвиг влево на ${t}px, позиция: ${r}px`)):(r=0,e.style.transform=`translateX(${r}px)`,console.log(`⬅️ История: возврат в начало, позиция: ${r}px`))}),n.addEventListener(`click`,function(){let t=i(),n=a(),o=r-t;o>=n?(r=o,e.style.transform=`translateX(${r}px)`,console.log(`➡️ История: сдвиг вправо на ${t}px, позиция: ${r}px`)):(r=n,e.style.transform=`translateX(${r}px)`,console.log(`➡️ История: максимальный сдвиг, позиция: ${r}px`))})}let r=document.querySelectorAll(`.M_HistoryItem`),i=document.querySelectorAll(`.M_HistoryInsideItem`);r.forEach((e,t)=>{e.addEventListener(`click`,function(){i.forEach(e=>{e.classList.remove(`active`)}),i[t]&&i[t].classList.add(`active`);let n=document.querySelector(`.O_HistoryInside`);n&&n.classList.add(`active`);let r=e.querySelector(`.A_HistoryItemPlusIcon`);r&&(r.style.transform=`rotate(45deg)`,setTimeout(()=>{r.style.transform=`rotate(0deg)`},300))})}),r.forEach(e=>{e.addEventListener(`mouseenter`,e=>{let t=e.currentTarget.querySelector(`.A_HistoryItemImage`),n=e.currentTarget.querySelector(`.A_HistoryPlusWrapper`);t&&(t.style.transform=`scale(1.05)`,t.style.transition=`transform 0.3s ease`),n&&(n.style.opacity=`1`,n.style.transition=`opacity 0.3s ease`)}),e.addEventListener(`mouseleave`,e=>{let t=e.currentTarget.querySelector(`.A_HistoryItemImage`),n=e.currentTarget.querySelector(`.A_HistoryPlusWrapper`);t&&(t.style.transform=`scale(1)`),n&&(n.style.opacity=`0.7`)})}),g()}function g(){document.querySelectorAll(`.M_HistoryInsideItem`).forEach((e,t)=>{let n=e.querySelector(`.M_HistoryInsideItemSliderImages`),r=e.querySelector(`.U_LeftHistoryInsideItem`),i=e.querySelector(`.U_RightHistoryInsideItem`),a=e.querySelector(`.A_CloseButton`);if(n&&r&&i){let t=0,o=n.querySelectorAll(`img`),s=o.length;function c(){let e=o[0]?.offsetWidth||n.offsetWidth,r=t*e;n.style.transform=`translateX(-${r}px)`}r.addEventListener(`click`,()=>{t>0&&(t--,c())}),i.addEventListener(`click`,()=>{t<s-1&&(t++,c())}),a&&a.addEventListener(`click`,()=>{e.classList.remove(`active`);let t=document.querySelector(`.O_HistoryInside`);t&&t.classList.remove(`active`)}),c();let l=0,u=0;n.addEventListener(`touchstart`,e=>{l=e.touches[0].clientX,u=e.touches[0].clientY}),n.addEventListener(`touchend`,e=>{let n=e.changedTouches[0].clientX,r=e.changedTouches[0].clientY,i=n-l,a=r-u;Math.abs(i)>Math.abs(a)&&Math.abs(i)>50&&(i>0&&t>0?(t--,c()):i<0&&t<s-1&&(t++,c()))})}})}async function _(){console.log(`???? Запуск инициализации истории...`);try{let e=await c();if(e.length===0&&(console.log(`???? Обычный метод не сработал, пробуем JSONP...`),e=await a()),e.length===0&&(console.log(`???? Все методы не сработали, используем тестовые данные...`),e=[{Год:`2025`,Месяц:`Май`,"Первая картинка":`https://optim.tildacdn.com/tild6166-3031-4332-a163-313535346139/-/format/webp/DJI_0532.jpg.webp`,"Вторая картинка":`https://optim.tildacdn.com/tild3937-3538-4461-a537-353434353533/-/format/webp/DJI_0556.jpg.webp`,"Третья картинка":`https://optim.tildacdn.com/tild3831-3139-4136-b764-386538316265/-/format/webp/DJI_0560.jpg.webp`,"Четвертая картинка":`https://optim.tildacdn.com/tild6430-3265-4065-b236-386332376238/-/format/webp/DJI_0567.jpg.webp`,"Пятая картинка":`https://optim.tildacdn.com/tild3666-6636-4434-b761-343737663139/-/format/webp/DJI_0578.jpg.webp`},{Год:`2025`,Месяц:`Апрель`,"Первая картинка":`https://optim.tildacdn.com/tild6166-3031-4332-a163-313535346139/-/format/webp/DJI_0532.jpg.webp`,"Вторая картинка":`https://optim.tildacdn.com/tild3937-3538-4461-a537-353434353533/-/format/webp/DJI_0556.jpg.webp`,"Третья картинка":``,"Четвертая картинка":``,"Пятая картинка":``}]),e.length===0)throw Error(`Нет данных истории для отображения`);console.log(`✅ Получены данные истории:`,e),s=d(e),console.log(`✅ Отформатированные данные истории:`,s),f(s,`O_History`),p(s,`O_HistoryInside`),setTimeout(()=>{h()},100)}catch(e){console.error(`❌ Ошибка инициализации истории:`,e),m(`O_History`,`Ошибка загрузки истории: ${e.message}`),m(`O_HistoryInside`,`Ошибка загрузки истории: ${e.message}`)}}window.initHistory=_,window.refreshHistory=_,document.addEventListener(`DOMContentLoaded`,()=>{(document.getElementById(`O_History`)||document.getElementById(`O_HistoryInside`))&&_()})})();var p=new Date().getFullYear();document.getElementById(`footerCopyrightYear`).textContent=`© ${p} Parametr`;