// ==UserScript==
  // @name        ElPeriodicoAccessibilityFixes
// @namespace   http://nvdaes.github.io/grease
// @description Improves the accessibility of El Periódico
// @description:es Mejora la accesibilidad de El Periódico
// @include     http://www.elperiodico.com/*
// @version     2017.1
// @grant       none
// ==/UserScript==

ICONS_LABELS = {
	"fa fa-facebook": "Facebook",
	"fa fa-twitter": "Twitter",
	"fa fa-whatsapp": "WhatsApp",
	"fa fa-ellipsis-h": "Más",
	"fa fa-pinterest-p": "Pinterest",
	"fa fa-google-plus": "Google Plus",
	"fa fa-linkedin": "LinkedIn",
	"fa fa-instagram": "Instagram",
}

function init() {
	var button = document.querySelector("button");
	button.setAttribute("accesskey", "0");
	button.setAttribute("aria-expanded", false);
	for (element of document.querySelectorAll("em.fa")) {
		var label = ICONS_LABELS[element.getAttribute("class")];
		if (!label) {
			continue;
		}
		element.setAttribute("aria-label", "Compartir en" + label);
		element.parentNode.setAttribute("tabindex", "0");
	}
	for (element of document.querySelectorAll("img[src='/ep-static/img/ico-facebook-messenger.png']")) {
		element.setAttribute("alt", "Messenger");
		element.parentNode.setAttribute("tabindex", "0");
	}
	for (element of document.querySelectorAll("button span, a span")) {
		element.parentNode.setAttribute("aria-label", element.textContent)
	}
}

function onClassModified(target) {
	if (target=== document.querySelector("button")) {
		var expanded = target.classList.contains("cruz");
		target.setAttribute("aria-expanded", expanded);
	}
}

var observer = new MutationObserver(function(mutations) {
	for (var mutation of mutations) {
		try {
			if (mutation.type === "attributes") {
				if (mutation.attributeName == "class")
					onClassModified(mutation.target);
			}
		} catch (e) {
			// Catch exceptions for individual mutations so other mutations are still handled.
			GM_log("Exception while handling mutation: " + e);
		}
	}
});
observer.observe(document, {attributes: true,
	subtree: true, attributeFilter: ["class"]});

init();
