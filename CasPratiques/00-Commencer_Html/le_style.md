La feuille de style css
---

Appelé feuille de style en cascade, elle permet la mise en forme des pages **Html**.

## I. Ecrire du style  :sunglasses:

On peut l'insérer dans la page html sous 3 formes :

1. En attribut :
```html
<div style=" width: 100%; " ></div>
```
2. Encadré dans une balise `style` en haut du `body`:

```html

<style media="screen">

  header{
    background-color: red;
  }

</style>

```

3. Dans une feuille de style exterieur avec la balise `link` :
```html
<link rel="stylesheet" href="css/style.css">
```

## II. Comment ça marche ?

### a. Cibler un element

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
  display: inline;
}

header .modifie, .modifie div {
  border-color: red;
}

```
> La propriété `display:inline;` permet de mettre les element en capacité de se positionner côte à côte

#### <u>Le nommage des class :

On peut nomme une class avec le nom que l'on veux, il suffis de l'écrire dans un attribut `class=" "` d'une balise.

Il n'y a pas de règle blocante mais dans un soucis d'efficacité et de clareté, chacun applique une **convention de nommage** afin de rester le plus clair possible.

On utilisera en général le nom de ce que l'element represente ou sa fonctionnalité, ou la fonction de la class.

> A vous d'essayer, il n'y à pas de mauvaises methodes, il y en à toujours de mieux...
s
