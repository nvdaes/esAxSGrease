// ==UserScript==
// @name        HuffPostEs Accessibility Fixes
// @namespace   http://nvdaes.github.io/grease
// @description Improves the accessibility of huffingtonpost.es.
// @description:es Mejora la accesibilidad de huffingtonpost.es.
// @include     http://www.huffingtonpost.es/*
// @version     2017.2
// @grant       none
// @run-at document-idle
// ==/UserScript== 

ICONS_LABELS = {
	"icon-Social-HuffPost": "Inicio",
	"icon-Social_Facebook": "Facebook",
	"icon-Social_Twitter": "Twitter",
	"icon-Social_Instagram": "Instagram",
	"icon-Social_Telegram": "Telegram",
	"icon-Social_Pinterest": "Pinterest",
	"icon-Social_Linkedin": "LinkedIn",
	"icon-Social_Mail": "Correo electrónico",
	"icon-Social_SMS": "SMS",
	"icon-Social_Tumblr": "Tumblr",
	"icon-Social_WhatsApp": "WhatsApp",
}

function init() {
	for (var p in ICONS_LABELS) {
		for (elem of document.querySelectorAll("a."+p)) {
			var prefix = ""
			if (elem.classList.contains("share-bar__item-link")) {
				prefix = "Compartir en ";
			}
			elem.setAttribute("aria-label", prefix+ICONS_LABELS[p]);
			if (p === "icon-Social_Pinterest") {
				elem.setAttribute("role", "button");
			}
		}
	}
}

init();
