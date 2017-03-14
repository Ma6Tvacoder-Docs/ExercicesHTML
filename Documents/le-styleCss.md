La feuille de style css
---

Appelé feuille de style en cascade, elle permet la mise en forme des pages **Html**.

---

> Si vous lisez ce texte dans un IDE, utilisez la commande Ctrl + F + *l'objet de votre recherche* pour naviguer dans la documenr

### [**I. Ecrire du style `CSS`**](#ecrire)

1. [En attribut](#att)
* [Dans une balise `<style>`](#balise)
* [Dans une feuiller de style `CSS`](#style)

### [**II. Comment ça marche ?**](#comment)


#### [a. <u>Cibler un element](#target)
1. [Les balises](#balise)
2. [Un chemin de selection](#path)

#### [b. <u>Les class](#class)

1. [Le nommage des class](#nommage)
* [creer une structure de donnée](#classStructure)

#### [c. <u>Les Id](#id)
1. [Definition](#def)
2. [ID vs Class](#vs)
3. [Ecrire une Id en Html](#html)
4. [Utiliser une Id en Css](#use)

##### [d. <u>Combiner Id et class](#comb)
##### [e. <u>Ajouter plusieurs class](#add)

### [**III. Quelques selecteurs**](#quel)
#### [a. <u>Le positionnement](#posi)
1. [**Float**](#float)
* [**display**](#display)
###### [*-- block*](#bloc)
###### [*-- inline*](#inline)
###### [*-- inline-block*](#Ibloc)
*  [**position**](#position)
###### [*-- relative*](#relative)
###### [*-- absolute*](#absolute)
###### [*-- fixe*](#fixe)



---
<a name="ecrire"/>
## I. Ecrire du style  :sunglasses:

On peut l'insérer dans la page html sous 3 formes :

<a name="att"/>
1. En attribut :
```html
<div style=" width: 100%; " ></div>
```

<a name="balise"/>
2. Encadré dans une balise `style` en haut du `body`:

```html

<style media="screen">

  header{
    background-color: red;
  }

</style>

```

<a name="style"/>
3. Dans une feuille de style exterieur avec la balise `link` :
```html
<link rel="stylesheet" href="css/style.css">
```
---

<a name="comment"/>
## II. Comment ça marche ?


<a name="target"/>
### a. Cibler un element


<a name="balise"/>
#### <u>Les balises :

En css, on écrit directement le nom qui va servire de *selecteur css* et on en modifie ses propriétés. On peut cibler directement des balises, comme ceci :

```css
header{
  background-color:#654232;
}

p{
  color:red;
}
```

> Il est à noter que cela change la *propriété css* de la balise toute entière. Par exemple, si vous modifiez la balise `p`, ce sont tous les paragraphes de votre page qui seront touchés.

---

<a name="path"/>
#### <u>Un chemin de selection :

On peut égallement combiner les elements afinde creer un chemin de selection. On selectionne la balise unique la plus grande suivis de l'element que l'on veux selectionner :

```css
header img{
  width:250px;
}

```

Il est possible de combiner les modifications entre elles afin de faire des economies d'efforts et de textes :

```css

header div, h1{
  font-family: cursive;
}

```
On peu ainsi commencer à mettre en forme les differents elements qui constituent la page `html`.

---

<a name="class"/>
### b. Les class

En `html` il existe un attribut `class` qui permet d'applique le même style à plusieurs element en même temps. La modification d'une propriétée de la class changerai instantanement l'ensemble des balises `html` auquel elle est appliqué.

```html
<section>
  <ul>
    <li class="modifie"></li>
    <li class="modifie"></li>
    <li class="modifie"></li>
    <li class="modifie"></li>
  </ul>
</section>

```

Avec un tel systeme, on peut alors appliquer un style commun à tous les element en même temps.
>En **css** on écrira un `.` devant le nom de la class pour l'identifier comme tel.

```css
.modifie{
  display: inline-block;
}

header .modifie, .modifie div {
  border-color: red;
}

```
> La propriété `display:inline;` permet de mettre les element côte à côte en ligne et ensemble, de former un bloque

---

<a name="nommage"/>
#### 1. <u>Le nommage des class :

On peut nomme une class avec le nom que l'on veux, il suffis de l'écrire dans un attribut `class=" "` d'une balise.

Il n'y a pas de règle blocante mais dans un soucis d'efficacité et de clareté, chacun applique une **convention de nommage** afin de rester le plus clair possible.

On utilisera en général le nom de ce que l'element represente ou sa fonctionnalité, ou la fonction de la class.

> A vous d'essayer, il n'y à pas de mauvaises methodes, et vous ne casserez pas votre ordinateur. Faitent des test :)

---

<a name="classStructure"/>
#### <u>Creer une structure de données

Le grand interêt des classes, viens de sa capacitée à dupliquer du style et à le faire passer d'un element à un autre.

On va ainsi pouvoir creer des bloques duplicable à loisir.

Par exemple :

```html

<div class="bloc">
  <h2></h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button class="bouttons" type="button" name="button" ></button>
</div>

```

Voila ce que l'on pourrait trouver en css :

```css
h2{
  text-transform: uppercase;
  color: cyan;
}

p{
  font-family: fantasy;
}

.boutons{
  border: 2px solid cyan;
  padding: 10px;
}

.bloc{
  width: 250px;
  padding : 10px 5px;
  background-color: grey;
}
/* Remarque : On peut changer l'etat d'une balise si elle est
située à l'interieur d'un autre elements. La couleur du h2 est
cyan de base On peut donc modifier cette propriétés lorsqu'elle
se trouve à l'interieur d'une class */
.bloc h2{
  color:orange;
}
.bloc p{
  font-family: cursive;
}

```

Lorsque l'on reproduis cette structure, alors tous les elements seront modifié comme vus precedemment les structures similaires se ressembleront.

---

<a name="id"/>
### c. <u>Les Id

<a name='def'/>
#### 1. Definition

Une `Id` est un attribut qui permet d'identifier precisement un element dans la page html. Il se note comme suis :

```html
<section id="introduction">

</section>

```

<a name="vs"/>
#### 2. Id vs Class

Veritable carte d'identité de la balise, l'Id est unique dans la page html. C'est à dire qu'elle ne pourras servir que pour une seul balise html. On l'utilise pour cibler un ensemble ou une balise en particulier.

<a name="html"/>
##### 3. Ecrire une Id en Html

Exemple avec la création d'un logo composé d'une image et d'un element html :

```html

<div id='logo'>
  <img src="img/logo.jpg" alt="logo">
  <div></div>
</div>

```

Une fois que le logo sera créé, on pourras le manipuler dans son ensemble en utlisant l'Id. On l'identifie en CSS par le caracter `#`

> Une `id` ainsi appliqué, nous permet de manipuler avec un seul terme l'ensemble des elements qui se trouvent à l'interieur de la balise `div` portant l'id

---

<a name="use"/>
##### 3. Utiliser une Id en Css

En css on pourrait donc proceder ainsi :

```css

#logo{
  display: block;
  margin: auto;
  position: relative;
  top:25px;
}
#logo img{
  width: 100%;
}
#logo div{
  border-left: 100px solid red;
}

```

Ainsi préparé l'element portant l'id `#logo` peut être manipulable dans son ensemble en faisant appel a son id. Une fois les elements à l'interieur stylisé, plus besoin de s'en occuper, on peut manipuler l'objet dans son ensemble avec `#logo`.

> L'element ne sera pas duplicable, il faudra creer une classe si vous souhaiter creer plusieurs *#logo*

---

<a name="comb"/>
### d. <u>Combiner Id et class

Dans la majorités des cas, on peux ne travailler qu'en class. Seuelement parfaois, il est necessaire d'avoir accés à un element precisement, indépendemment des autres. L'id va nous aider dans ce sens.

Voyons ça :

```html

<ul>
  <li class="poussin"></li>
  <li class="poussin"></li>
  <li id="vilain" class="poussin"></li>
  <li class="poussin"></li>
  <li class="poussin"></li>
  <li class="poussin"></li>
</ul>

```

Illustrons le propos avec la fable du vilain petit canard. Les elements poussin sont tous similaires et identiques. Seuelement afin que l'on ai

---

<a name="add"/>
### ajouter plusieurs class à une même balise


```html

<ul>
  <li class="poussin"></li>
  <li class="poussin"></li>
  <li id="vilain" class="poussin"></li>
  <li class="poussin"></li>
  <li class="poussin"></li>
  <li class="poussin"></li>
</ul>

```

---

<a name="quel"/>
### III. Quelques Selecteurs

Il existe une grande variétée de selecteurs Css qui nous permettent de modifier les propriétés d'un element.

On peux influer sur sa couleur, sa tailler ou le type de texte. Chaque selecteur modifie une propriété particuliere d'un lement.

En premier regardons les selecteurs de positionnement ui vont vous permettres d'agencer les elements entres eux.

---

<a name="posi"/>
#### a. <u>Le positionnement

<a name="float"/>
##### 1. *Float*

```css
img{
  float:left;
}

.menu{
  float: right;
}

```

>Le float permet de mettre un element en habillage de texte. Le texte viens *épouser* sa forme.

<a name="display"/>
##### 2. *display*

<a name="bloc"/>
###### i. **block**

```css
#block-00{
  display:block;
  margin:auto;
}
```
Display prend toute la ligne.

Si l'element a une taille limité, **une marge** comble ce qu'il reste de place.

>Cette propriété combiné à un `margin:auto;` centre l'element automatiquement au centre de la page, quelque soit sa largeur.


<a name="inline"/>
###### ii. **inline**

```css
#block-01{
  display:inline;
}
```

> La propriété `inline` met les elements les uns à la suite des autres pour peux qu'ils aient une largeur qui combiné fait moins que 100% de la page.

<a name="Ibloc"/>
###### iii. **inline-bloc**

```css
#block-02{
  display:inline-block;
}

```

>La propriété `inline-block` met les elements les uns à la suite des autres et forment un bloque, qui chasse les autres.


<a name="position"/>
##### 2. *position*

<a name="relative"/>
###### i. **relative**

L'objet garde sa position initiale dans le flux, mais
le rendu peut être déplacé.

```css

img{
  position: relative;
  right:10px;
  bottom: 10px;
}

```

> Toute les images se déplacerons de `10` pixels vers le haut et de `10` vers la gauche, **et le reste n'en sera pas perturbé.**


<a name="absolute"/>
###### ii. **absolute**

L'objet perd sa position dans le flux s'en tient au dernier objet dans la hierarchie html avant lui par defaut. ** Trés utile lorsque l'on veux superposer deux elements l'un sur l'autre.**

L'objet est alors positionnable par rapport à l'objet `Window`, *votre fenêtre de navigateur*. Vous pouvez par defaut placer votre objet par rapport à la fenêtre de votre écran. *Trés utile pour le responsive.*

> On peux *encapsuler* un objet html en position absolute si le parent est lui même en `position:relative;` L'objet est alors relatif au redner contexte en `position: relative;`.

```css
.logo{
  position: relative;
  }
  img{
    position: absolute;
    right:10px;
    bottom: 10px;
  }

```

L'objet image est placé par rapport à l'objet `.logo` et peut alors former un tout.

###### Important !


Si vous souhaitez placer un objet par rapport au body, *c'est à dire pouvoir le placer en `bottom:10px;`* peut importe la tailler de la page. *Il faut meetre la balise body en `position:relative;`*

<a name="fixe"/>
###### ii. **fixe**

L'objet Est placé en fonction du referentiel hauteur largeur et aura la position `fixe` la ou vous le mettrez. **Il ne bougera pas lors du scroll**.

```css

img{
  position: fixe;
  right:250px;
  top: 150px;
}

```

> Utile pour positionner une nav toujours affiché à l'écran.
