#### TP3-PONG.
#### V1-Webpack

### presentation :
- Dans cette deuxieme version, on mettera en pratique l'esnemble des notions traitées en cours concernant webpack afin de réorganiser notre projet de sorte à ce qu'il s'appuie sur ce dernier.
 1. #### Recupertation du projet :
 l'éxécution de la commande suivante est nécessaire pour pouvoir récupérer ce projet:
 ```bash
https://gitlab-etu.fil.univ-lille1.fr/benmaouche/l3g7-jsfs.git
```
2. #### Éxecution et affichage des résultats:
 ### 2.1- differentes commandes éxécutées:
 - Installation des modules de Node.js:
 ```bash
 npm install 
```
- installer les modules liés à Webpack:
```bash
  npm init
```
```bash
  npm install webpack webpack-cli --save-dev
```
- création du fichier webpack.config.js et associer le point d'entrée au fichier pong.js comme ceci:
```bash
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'scripts', 'pong.js'),
  mode :  (PRODUCTION ? 'production' : 'development'),
  output: {
    path: (PRODUCTION ? path.resolve(__dirname, '..server/public') : path.resolve(__dirname, 'dist')),
    filename: 'scripts/bundle.js'
  }
};
```
- création du répértoire "dist" ainsi que le bundle:
```bash
./node_modules/.bin/webpack
```
- création d'un fichier index.html, les images utilisés ainsi que de sa feuille de style au sein du répértoire "dist" qui integre le bundle en ajoutant ces lignes de code à notre fichier de configuration Webpack:
- commande de gestion des ressources à l'aide du plugin copy-webpack-plugin:
- commande de gestion des images,fichiers html ainsi que la feuille de style avec webpack-loader:
```bash
 npm install file-loader --save-dev
```
npm install --save-dev copy-webpack-plugin
```bash
plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "/index.html"
        }),
        new CopyPlugin({
            patterns: [
              { 
                context: path.resolve(__dirname, 'src', 'html'),
                from: "**/*.html",
                to:  'html',
                noErrorOnMissing: true,
                globOptions: { }
              },
              { 
                context: path.resolve(__dirname, 'src','images'),
                from: '**/*',
                to:  'images/[name][ext]',
                noErrorOnMissing: true,
              },
              {
               context: path.resolve(__dirname, 'src', 'style'),
               from: '**/*.css',
               to:  'style/[name][ext]',
                 noErrorOnMissing: true,
             },
           ]
```
-  prise en compte dans le code des dépendances vers les fichiers images et css à l'aide d'import en ajoutant ces lignes de code au fichier de configuration Webpack:
```bash
  module: {
        rules : [
          {
            test: /\.(png|jpg|gif)/i,
            use: [
              {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
              },
              {
                loader: 'file-loader',
                options: {
                  name : '[name].[ext]',
                  outputPath : 'images'
                }}]}]},
```
- Mise en place d'une nouvelle cible dans notre fichier package.json en complétant l'entrée "scripts" de la sorte:
```bash
"scripts": {
    "build":"build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
  - implemenattion du serveur de développement proposé par Webpack et ajout de la cible au fichier package.json:
  ```bash
  npm install webpack-dev-server --save-dev
   ```
-  ajouter le paramétrage dans le fichier webpack.config.js :
```bash
 devServer: {
      static: {
         publicPath: path.resolve(__dirname, 'dist'),
         watch : true
      },
      host: 'localhost',
      port : 8080,
      open : true
  },
  ```
  - Transpilage avec Babel:
  ```bash
  npm install @babel/core --save-dev
  ```
  ```bash
  npm install --save-dev @babel/preset-env
  ```
- installation du loader associé à Babel:
```bash
npm install babel-loader --save-dev
```
- Ajout des lignes de code au fichier de configuration webpack au niveau des loader:
```bash
{
  test: /\.m?js$/,
  exclude: /(node_modules)/,
  use: {
      loader: 'babel-loader'
        }
```
- definition du comportement en fonction du mode:
Une constante PRODUCTION et un ensemble de code ont été mis à jour et definis au sein du fichier de configuration de sorte à ce que le dossier de destination de la cible build differe selon le mode choisi: 
```bash
const PRODUCTION = false;
module.exports = {
output: {
        path: (PRODUCTION ? path.resolve(__dirname, '..server/public') : path.resolve(__dirname, 'dist')),
        filename: 'scripts/bundle.js'
    }, 
    ......
```
### 2.2- affichage des résultats:

- afin d'afficher les résultats(demarrer le serveur et affichage du contenu du fichier index dans un navigateur),il faudra se positionner au niveau du répertoire client(source) et éxecuter ces commandes:
 ```bash
 npm run build (eventuellement executable à chaque modification apportées au sein des fichiers webpack)
 ```
 ```bash
 npm run dev-server
  ```





