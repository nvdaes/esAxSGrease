// ==UserScript==
// @name           Publico Accessibility Fixes
// @namespace      http://nvdaes.github.io/grease
// @description    Improves the accessibility of Diario Público.
// @description:es    Mejora la accesibilidad del Diario Público.
// @author         Noelia Ruiz Martínez <nrm1977@gmail.com>
// @copyright 2017 Noelia Ruiz Martínez
// @license GNU General Public License version 2.0
// @version        2017.1.1
// @grant       none
// @include http://*publico.es/*
// ==/UserScript==


ICONS_LABELS = {
	"fa fa-facebook": "Compartir en Facebook",
	"fa fa-twitter": "Compartir en Twitter",
	"fa fa-google-plus": "Compartir en Google Plus",
	"fa fa-linkedin": "Compartir en LinkedIn",
	"fa fa-comment": "Comentarios",
	"meneame": "Compartir en Menéame",
}

function init() {
	for (element of document.querySelectorAll("i, li")) {
		var label = ICONS_LABELS[element.getAttribute("class")];
		if (!label)
			continue;
		element.setAttribute("aria-label", label);
		if (element.tagName==="I")
			continue;
		element.setAttribute("role", "link");
	}
}

init();
