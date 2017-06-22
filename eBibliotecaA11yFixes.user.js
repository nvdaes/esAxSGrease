// ==UserScript==
// @name           eBiblioteca Accessibility Fixes
// @namespace      http://nvdaes.github.io/grease
// @description    Improves the accessibility of ebiblioteca.org
// @description:es    Mejora la accesibilidad de ebiblioteca.org
// @author         Noelia Ruiz Martínez <nrm1977@gmail.com>
// @copyright 2017 Noelia Ruiz Martínez
// @license GNU General Public License version 2.0
// @version        2017.1
// @grant       none
// @include http://ebiblioteca.org/*
// ==/UserScript==

function tweak() {
	var img = document.querySelector('img[title="Descarga especial para invidentes"]');
	var onclick = img.getAttribute("onclick");
	var downloadPage = onclick.match("http.*(?=\")");
	var downloadLink = document.createElement("A");
	downloadLink.setAttribute("href", downloadPage);
	downloadLink.innerHTML = "<img src='gif/descargar.png' alt='descargar' title='bajafiles.com' />";
	downloadLink.style = "cursor:pointer";
	for (inaccessibleImg of document.querySelectorAll('img[alt="descargar"]')) {
		inaccessibleImg.parentNode.remove();
	}
	img.parentNode.replaceChild(downloadLink, img);
}

tweak();
