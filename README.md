1.- Inicio proyecto y coloco información Basica

npm init



3.- Todos los proyectos en la actualidad usaan algo como un administrador de tareas (grunt, gulp), nosotros usaremos webpack que es el mas popular junto a react

npm install --save-dev webpack

4.- webpack necesita configuracion, segun las mejores practicas, deberia harcer un archivo, lo llamare webpack.config.js y lo colocare en la raiz (hay que tener en cuenta que es un simple hello world, nade de ambientes de productivo ni nada)

crear archivo webpack.config.js (en la raiz del proyecto)

Lo importantes es que debe ser un Json que tenga el campo entry (desde donde se ejecutara) y output (que tiene path y filename), esto es donde se generara el bundle de JS, ejemplo:

--------------------------------------------------
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
---------------------------------------------------

5.-

creamos carpeta "src" en la raiz donde colocaremos las fuentes

6.- 
creamos un archivo (en mi caso index.jsx) en la raiz de "src" como lo establecí en el "webpack.config.js"

con el contenido (por ahora) --> console.log('Hello World!');

7.- Genero el bundle, este es el archivo que genera el webpack, seria solo 1 archivo que tendria toda la logica:

en la raiz del proyecto, por la consola "webpack -d" , este genera el archivo en la ruta /dist/bunder.js, como lo indique en el "webpack.config.js"

8.- Creo archivo html que utilize el bundle creado

creo index.html en la carpeta "src", con la siguiente info:

<html>
  <head>
    <meta charset="utf-8">
    <title>NPM, React, Webpack y Babel(6)</title>
  </head>
  <body>
    <div id="app" />
    <script src="../dist/bundle.js" type="text/javascript"></script>
  </body>
</html>

10.- estoy haciendo 2 cosas, primero simplemente genero el bundle.js, con toda la logica del proyecto, la cual sera practicmente el console.log que esta en index.jsx, luego creo una pagina html para probar el bundle creado, al abrir la pagina(directamente en el navegador, aun no tenemos servidor web)
no mostrara nada, pero en la consola aparecera "Hello World"


9.-

Para ser mas productivos, (y "usar" nuevas y  mejores funcionalides), usaremos JSX y ES6 (la Nueva version de javascript), como todos los navegadores aun no lo soportan, hay una herramienta que "compila" el javascript 6 en javascript 5, una de ella es babel, asi que lo agregaremos al proyecto:

npm install babel-core babel-loader babel-preset-es2015 babel-preset-react -save-dev

babel-preset-es2015 y babel-preset-react son plugins utilizado por babel-loader para traducer ES6 y JSX.

10.- Igualmente que webpack, babel tambien necesita su configuracion esta se realiza mendiante un archivo llamado ".babelrc" que se coloca en la raiz del proyectoy tendra la siguiente nformación:

{
  "presets" : ["es2015", "react"]
}

vean que present referencia a los archivos que instalamos anteriormente (babel-preset-es2015 para ES6 y babel-preset-react para JSX)

11.- Le decimos a webpack que utilize babel para "compilar" el proyecto, editando el archivo "webpack.config.js"

// Existing Code ....
var config = {
  // Existing Code ....
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
}


11.- Instalo react y lo añado al package.json

npm install --save react react-dom // --save lo añade automaticamente

