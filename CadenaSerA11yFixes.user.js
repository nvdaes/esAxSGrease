﻿// ==UserScript==
// @name        CadenaSER Accessibility Fixes
// @namespace   http://nvdaes.github.io/grease
// @description Improves the accessibility of the webpages with audio files of Cadena SER
// @description:es Mejora la accesibilidad de las páginas con archivos de audio de Cadena SER
// @include     http://play.cadenaser.com/audio/*
// @author         Noelia Ruiz Martínez <nrm1977@gmail.com>
// @copyright 2017 Noelia Ruiz Martínez
// @license GNU General Public License version 2.0
// @version     2017.3
// @grant       GM_log
// ==/UserScript==

function getAudio() {
	var audio = document.querySelector('meta[name="cXenseParse:recs:articleid"]').getAttribute("content")+".mp3";
	var datetime = document.querySelector('meta[name="cXenseParse:recs:publishtime"]').getAttribute("content").replace(/-/g, "/").replace(/\/0(?=\d)/g, "/");
	var date = datetime.match(".*(?=T)");
	var href = "http://sdmedia.playser.cadenaser.com/"+date+"/"+audio;
	return href;
}

function init() {
	for (link of document.querySelectorAll("a")) {
		link.setAttribute("aria-label", link.title);
	}
	var div = document.createElement("DIV");
	div.setAttribute("role", "complementary");
	div.innerHTML = "<p><audio controls src='"+getAudio()+"'>Audio no admitido</audio></p>"
	div.setAttribute("id", "audioAccesible");
	div.setAttribute("role", "complementary");
	document.body.appendChild(div);
	var homeLink = document.querySelector('a[href="http://cadenaser.com"]');
	homeLink.setAttribute("aria-label", "Cadenaser.com");
	var button = document.querySelector("button");
	button.setAttribute("aria-pressed", false);
	button.setAttribute("aria-label", "Opciones de usuario");
}

function onNodeAdded(target) {
	if (target.getAttribute("id", "audioAccesible")) {
		var audio = target.querySelector("audio");
		audio.oncanplay = function() {
			var download = document.createElement("A");
			download.setAttribute("href", getAudio());
			download.innerText = "Descargar audio";
			target.appendChild(download);
		}
	}
}

function onClassModified(target) {
	if (target=== document.querySelector("button")) {
		target.setAttribute("aria-pressed", "mixed");
	}
}

var observer = new MutationObserver(function(mutations) {
	for (var mutation of mutations) {
		try {
			if (mutation.type === "childList") {
				for (var node of mutation.addedNodes) {
					if (node.nodeType != Node.ELEMENT_NODE)
						continue;
					onNodeAdded(node);
				}
			} else if (mutation.type === "attributes") {
				if (mutation.attributeName == "class")
					onClassModified(mutation.target);
			}
		} catch (e) {
			// Catch exceptions for individual mutations so other mutations are still handled.
			GM_log("Exception while handling mutation: " + e);
		}
	}
});
observer.observe(document, {childList: true, attributes: true,
	subtree: true, attributeFilter: ["class"]});

init();
