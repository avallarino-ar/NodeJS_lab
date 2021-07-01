# NodeJS

## Instalaciones recomendadas

### Instalaciones Necesarias
* [Google Chrome](https://www.google.com/chrome/)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Mongo Compass](https://www.mongodb.com/try/download/compass)

* [Git](https://git-scm.com/)

```
git config --global user.name "Tu nombre"    
git config --global user.email "Tu correo" 
```

* [Crear cuenta en GitHub](https://github.com/)

* [Node](https://nodejs.org/es/)


### Extensiones de VSCode
[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

#### Configuración del Bracket Pair Colorizer 2

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

```
"bracket-pair-colorizer-2.colors": [  
   "#fafafa",  
   "#9F51B6",   
   "#F7C244",  
   "#F07850",  
   "#9CDD29",  
   "#C497D4"  
],
``` 
#### Tema que estoy usando en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

#### Instalaciones recomendadas sobre Angular

* [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)


---

+ **Node**: JS en el lado del servidor.
+ Corre sobre V8 de Google.
+ Callback: función que se envía como argumento.


### Instalar [nodemon](https://www.npmjs.com/package/nodemon)
util para DES, cuando hago un cambio en mi código se reinicia automáticamente

sudo npm install -g nodemon

para eliminarlo:
sudo npm uninstall -g nodemon


### Crear el package.json
npm init 
# seteo la config. y cuando agrego un paquete, se registra en la parte de "dependencies"
# si quiero que solo sea para DEV, al instalarlo le indico --save-dev, y se registra en "devDependencies"
# para desinstalar: npm uninstall <paquete>


### Isntalar yargs
npm i yargs
