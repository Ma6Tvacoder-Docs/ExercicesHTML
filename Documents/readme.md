# L'index.html

le fichier index.html est le fichier par défaut des navigateurs. il est donc votre porte d'entrée sur le site. Il possède une structure fixe qui en fait sa force.

---
## <u>les balises html</u>

le html fonctionne avec un système de balises encadrantes du contenu <html><html>`

---
### Structure principale d'une page Web

```html
<!DOCTYPE html> <!-- déclaration du type de document -->

<html lang="fr"> <!-- balise html : tout ce qui se trouve à l'intérieur
  sera considéré comme du html -->

  <head> <!-- balise qui contient les metadonnées et les informations
  fonctionnelles -->

    <meta> <!-- définit les metadonnées, nécessaires au bon fonctionnement
      de la page / pas de balise fermante -->

  <head>

  <body> <!-- littéralement le corps de la page, tout ce qui sera affiché -->

    partie visuelle

  </body>

</html>
```
La structure de la page comprend une partie pour les **éléments masqués** --> `<head>` et une pour les **éléments affichés** --> `<body>`.

La *structure affichée* est la base de tous fichiers `HTML`. Ces informations sont le minimum pour *rendre la page fonctionnelle.*

---
### Le `<head>`

la balise head contient les informations concernant la page. Certains éléments lui sont indispensables et ils se présentent ainsi :

```html
<head>

  <meta charset="utf-8"> <!-- balise déclarant le format de l'alphabet utilisé,
    soit le l'alphabet français. -->

  <title>Titre de la page</title> <!-- titre qui sera affiché sur l'onglet
    de la page dans le navigateur -->

  <link rel="stylesheet" href="css/style.css"> <!-- link permet de lier un
    fichier exterieur au document html -->

</head>
```

---
### Le `<body>`

Le body représente tout ce qui sera affiché sur la page. il est lui aussi soumit à une structure definie. Il est séparé en 3 grands ensembles :

```html
<!DOCTYPE html>

<body>
    <header> <!-- contient les éléments qui vont apparaitrent sur toutes les
       pages : Menu, logo, bar de recherche... -->

    </header>

    <section> <!-- la balise section va permettre de délimiter un espace  -->

    </section>

    <footer> <!-- le footer va également apparaitre sur toutes les pages,
    il contient les informations secondaires mais à rendre accessibles
    contacts, formulaire de newsletter, copyrights, plan du site -->

    </footer>
</body>

```

---
### Le `<header>`

Eléments d'entête, le `header` contient ce qui sera nécessaire à l'utilisateur pour identifier le site et naviguer dans ce dernier. Il peut contenir un grand nombre d'éléments qui ne sont pas limités.
```html
<header>

  <img src="img/logo.jpg" alt="logo">

  <nav>
    <ul>
      <li>Accueil</li>

      <li>Galerie</li>

      <li>Contact</li>
    </ul>
  </nav>

  <h1>Titre de ma page</h1>

</header>
```
Dans cet exemple, on peut voir 3 éléments.

1. <u>`img`</u>

une balise qui se suffit à elle-même. Cette balise contient des informations en vert dans des [*attributs*](#att) écrits en orange.

2. <u>`nav`</u>

La **navigation** ou *menu*. C'est la pierre angulaire de votre site, il permet de circuler entre les pages ou parfois à l'intérieur de la page.

> La plupart du temps, on utilise une balise `<ul> <li>`--> **[liste ordonnée](#list)**, afin d'ordonner les éléments du menu sous forme de **[liste à puce](#list)**. Ils seront ainsi plus facilement manipulables.

---
<a name="list"/>
#### Les listes

Les listes permettent d'ordonner les éléments entre eux et de les structurer l'un en dessous de l'autre.

Il en existe plusieurs types mais les plus courantes sont la **liste à puce** et la **liste ordonnée**. Voici comment elles s'écrivent :

* Liste à puce : `<ul>`

```html
<ul>

  <li>menu-01</li>

  <li>menu-02</li>

  <li>menu-03</li>

</ul>
```
Elle produit exactement ceci :

* menu-01
* menu-02
* menu-03


1. liste ordonnée : `<ol>`

```html

<ol>

  <li>menu-01</li>

  <li>menu-02</li>

  <li>menu-03</li>

</ol>

```

Elle produit exactement ceci :

1. menu-01
2. menu-02
3. menu-03


---

<a name="att"/>
#### Les attributs

Les attributs nous permettent de spécifier des informations relatives à la balise dans laquelle ils se situent.

La balise image prend par exemple deux paramètres, un attribut **src** pour *source* et un attribut **alt** pour le texte alternatif. **Le texte alternatif** permet d'afficher un texte à la place d'une image lorsque celle ci ne s'affiche pas correctement. Il est aussi important pour ce que l'on appelle le **référencement** qui permet aux moteurs de recherches comme google d'identifier la page et de la classer parmis les autres.


Prenons une balise simple et regardons les différents attributs que l'on peut voir apparaitre
 ```html
<div  class="nomDeClass" onclick="foncionJS()" ... ></div>
 ```
On peut en trouver un grand nombre différents.

---
