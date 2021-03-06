# esAxSGrease

-   Basado en el [proyecto axSGrease, de NV Access](https://github.com/nvaccess/axSGrease)
-   Copyright: 2017 Noelia Ruiz Martínez

esAxSGrease es un conjunto de scripts de
[GreaseMonkey](https://addons.mozilla.org/es/firefox/addon/greasemonkey/)
para mejorar la accesibilidad de varios sitios web.

## Instalación

Antes de que puedas instalar cualquiera de estos scripts, en primer
lugar debes instalar
[GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
Una vez hecho eso, simplemente activa el enlace de descarga del script
que te interese entre los siguientes para descargarlo e instalarlo

## Scripts


A continuación hay información sobre cada script.

### ElPais Accessibility Fixes
[Descargar ElPais Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/ElPaisA11yFixes.user.js)

Este script mejora la accesibilidad del [Diario El País](http://elpais.com).

Hace lo siguiente:

- Muestra las etiquetas para los botones Compartir en Facebook y Compartir en Twitter, y para el enlace Ver comentarios, bajo el titular de las distintas noticias.

### Publico Accessibility Fixes
[Descargar Publico Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/PublicoA11yFixes.user.js)

Este script mejora la accesibilidad del [Diario Público](http://publico.es).

Hace lo siguiente:

- Proporciona etiquetas a algunos elementos para compartir en redes sociales, o acceder a comentarios sobre los artículos visitados.

### eBiblioteca Accessibility Fixes
[Descargar eBiblioteca Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/eBibliotecaA11yFixes.user.js)

Este script mejora la accesibilidad de [ebiblioteca.org](http://ebiblioteca.org).

Hace lo siguiente:

- Establece el español como idioma predeterminado, para evitar la lectura incorrecta con lectores de pantalla.
- Marca las tablas como elementos de diseño y no de datos, de acuerdo con su uso real en el sitio web.
- En las páginas específicas para cada libro, marca el título de la obra como encabezado de nivel 1.
- Elimina los enlaces de descarga inaccesibles.
- Sustituye el gráfico de "descarga especial para invidentes" por un enlace de descarga convencional, accesible desde la lista de elementos de NVDA (NVDA+f7).

### CadenaSER Accessibility Fixes
[Descargar CadenaSER Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/CadenaSerA11yFixes.user.js)

Este script mejora la accesibilidad de las páginas con archivos de audio de [Cadena SER](http://cadenaser.com).

Hace lo siguiente:

- Cuando sea posible identificar el archivo de audio correspondiente, añade un reproductor HTML y el enlace al archivo mp3, en una zona complementaria al final de la página.
- Mejora la accesibilidad de ciertos enlaces (como algunos relativos a redes sociales) etiquetándolos mediante su título.
- Proporciona la etiqueta "Opciones de usuario" para el botón que muestra y oculta las opciones de registro e inicio de sesión. También se indica si se ha pulsado el botón o si se encuentra en su estado inicial.

Nota: Para que estos cambios tengan efecto, es necesario abrir las páginas en una ventana o pestaña nueva, o recargarlas con control+r.

### HuffPostEs Accessibility Fixes
[Descargar HuffPostEs Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/HuffPostEsA11yFixes.user.js)

Este script mejora la accesibilidad de [huffingtonpost.es](http://www.huffingtonpost.es).

Hace lo siguiente:

- Proporciona etiquetas a elementos (enlaces o botones) para suscribirse o compartir contenido en redes sociales.
- Identifica el enlace a la página de Inicio.

### ElPeriodico Accessibility Fixes
[Descargar ElPeriodico Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/ElPeriodicoA11yFixes.user.js)

Este script mejora la accesibilidad de [elperiodico.com](http://www.elperiodico.com).

Hace lo siguiente:

- Indica el estado del menú de navegación (contraído o expandido), y añade un acceso de teclado para mostrarlo u ocultarlo (alt+shift+0 en Firefox).
- Proporciona etiquetas para identificar el botón de menú y distintos enlaces, como el de Iniciar sesión o los relativos a redes sociales (para compartir cada noticia o seguir la actividad del diario).

<footer>
<ul>
<li><a href="https://github.com/nvdaes/esAxSGrease">Proyecto en GitHub</a></li>
<li><a href="https://nvdaes.groups.io/g/esaxsgrease/rss">Canal de noticias del repositorio</a></li>
</ul>
<p>Última actualización: 29 de agosto de 2017</p>
</footer>

