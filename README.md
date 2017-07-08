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

### CadenaSer Accessibility Fixes
[Descargar CadenaSer Accessibility Fixes](https://github.com/nvdaes/esAxSGrease/raw/master/CadenaSerA11yFixes.user.js)

Este script mejora la accesibilidad de las páginas con archivos de audio de [Cadena Ser][http://cadenaser.com).

Hace lo siguiente:

- Convierte en un enlace identificado como "Audio accesible" el elemento "Escuchar ahora": Activando el enlace se podrá reproducir el audio desde el navegador; eligiendo guardar como con el menú contextual (tecla Aplicaciones) se podrá descargar el correspondiente mp3.).
- Mejora la accesibilidad de ciertos enlaces (como algunos relativos a redes sociales) etiquetándolos mediante su título.
- Proporciona la etiqueta "Opciones de usuario" para el botón que muestra y oculta las opciones de registro e inicio de sesión. También se indica si se ha pulsado el botón o si se encuentra en su estado inicial.

Nota: Para que estos cambios tengan efecto, es necesario abrir las páginas en una ventana o pestaña nueva, o recargarlas con control+r.
