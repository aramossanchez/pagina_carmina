# PÁGINA WEB WWW.CARMINAZAMORA.COM

## ACTIVADO DEPLOY AUTOMÁTICO EN GITHUB PAGES:
1. Ir a actions en github y activar el workflow de next.js.
2. Ir a settings en github y activar en pages que la source del build y el deploy sea GitHub Actions.
3. Editar el archivo next.config.js y editar con las opciones necesarias.

## CREADO ARCHIVO .ENV
1. Creado 2 archivos .env (.env y .env.production).
2. Archivo .env.production en el que se incluía nombre de repositorio (pagina_carmina) para que funcione correctamente los enlaces mientras la web está funcionando en la url de github pages.
3. Archivo .env.production con valor "/" cuando la web está funcionando en la url del dominio personalizado.

## GITHUB PAGES ASOCIADO AL DOMINIO DE NOMINALIA
1. Creado un CNAME en DNS de Nominalia que relaciona dominio www.carminazamora.com. con aramossanchez.github.io.
2. En github -> settings -> pages -> Custom domain -> Asociado con el dominio www.carminazamora.com.

## ESTRUCTURA Y FUNCIONAMIENTO DE LA WEB
1. Página principal con containers.
2. Cada container es una sección de la web.
3. Creados components, para elementos más pequeños que se repiten en varias ocasiones.
4. Obtención de datos a partir de archivos json ubicados en carpeta data.
5. Tipado de todos los archivos data.
6. Página full responsive.
7. Textos legales en la web.
8. Validación de formulario.
9. Botón con conexión a api de whatsapp.

## CÓDIGO QR DE LA WEB
![Código QR](images/qr.png)