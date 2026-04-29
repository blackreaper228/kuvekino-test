import "./bigStyle.css";
import "./style.css";
import "./js/table.js";
import "./js/history.js";

//вывод текущего года в футере

const year = new Date().getFullYear();
document.getElementById(
  "footerCopyrightYear"
).textContent = `© ${year} Parametr`;
