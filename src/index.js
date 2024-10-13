import "./main.css";
import loadHomepage from "./load-homepage.js";
import loadMenu from "./load-menu.js";
import loadContact from "./load-contact.js";
import loadAbout from "./load-about.js";

function switchTab(tab) {
  document.querySelector("#content").replaceChildren();
  switch(tab) {
    case "homepage":
      loadHomepage();
      break;
    case "menu":
      loadMenu();
      break;
    case "contact":
      loadContact();
      break;
    case "about":
      loadAbout();
      break;
    default:
      break;
  }

  document.querySelector(".tab-switch:disabled")?.toggleAttribute('disabled');
  document.querySelector(`[value="${tab}"]`).disabled = true;
};

function addListenersToTabButtons() {
  const tabButtons = document.querySelectorAll(".tab-switch");
  for (const button of tabButtons) {
    button.addEventListener("click", (e) => { 
      switchTab(e.currentTarget.value);
    });
  }
};

switchTab("homepage");
addListenersToTabButtons();
