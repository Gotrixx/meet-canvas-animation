# Meet Canvas Animation

> Base exercise to discover animation with canvas.

* * *

**meet-canvas-animation** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte de l'animation avec la balise `<canvas>`.

Le cours est réparti en 4 exercices distincts, dans leurs dossiers propres. Le dossier `_shared` contient les éléments communs à chaque exercices (feuilles de styles, images…). Un workflow Grunt basique est inclus, pour vérifier les fichiers javascript avec **eslint**.

## Branche `completed-es2015`

Afin de vous permettre d'avoir une série de références de script en **ES2015**, j'ai créé une branche supplémentaire, nommée `completed-es2015`, qui contient les versions corrigées, mais écrites en suivant la nouvelle norme JavaScript ES2015.  
Comme expliqué au cours de [RIA](https://github.com/hepl-ria), ces scripts ont besoin d'être convertis (_transpilés_) vers une plus vieille version de javascript pour fonctionner dans un navigateur. J'ai modifié le workflow **grunt** pour y inclure une tâche de compilation _via_ [babeljs](https://babeljs.io). Pour chaque exercice, vous aurez donc un fichier `script.js`, qui est la version _compilée_ et utilisée par le navigateur, et un fichier `script.es2015.js`, utilisant la nouvelle norme.  
J'en ai aussi profiter pour ajouter quelques règles propres à **ES2015** dans le fichier `.eslintrc.json`.

## Détail des exercices

### `exo-one`

Premier exercice : à l'instar de notre tout premier exercice sur canvas, nous allons d'abord dessiner 4 carrés de couleur. Nous allons ensuite les animer pour que, chaque seconde, chaque carré change de couleur. Nous en profiterons pour encoder les couleurs sous forme d'un tableau de séquences.

### `exo-two`

Second exercice : en utilisant une [spritesheet](./_shared/ramonaflowers.png) tirée du jeu **Scott Pilgrim vs the World** par [Ubisoft](https://www.ubisoft.com), nous allons animer un cycle de marche d'un personnage.

### `exo-three`

Troisième exercice : nous allons créer une bulle, qui va monter vers le haut de l'écran, et qui, une fois hors des limites du _canvas_, reviendra par le dessous, en boucle.

### `exo-four`

Quatrième exercice : sur base de l'exerice précédent, nous allons maintenant créer un canvas rempli de bulles qui tournent en boucle. Nous en profiterons pour créer une classe dédiée, et générerons des bulles aléatoirement.
