# L'index.html

le fichier index.html est le fichier par defaut des navigateurs. il est donc votre porte d'entrée sur le site. Il possede une structure fix qui en fait ça force.

---
## <u>les balises html</u>

le html fonctionne avec un systeme de balise encadrant du contenus <html><html>`

---
### Structure principale d'une page Web

```html
<!DOCTYPE html> <!-- declaration du type de document -->

<html lang="fr"> <!-- balise html : tout ce qui se trouve à l'interieur
  sera considéré comme du html -->

  <head> <!-- balise qui contient les metadonnée et les informations
  fonctionnelles -->

    <meta> <!-- definis les metadonnées, necessaire au bon fonctionnement
      de la page / pas de balise fermente -->

  <head>

  <body> <!-- litteralement le corp de la page, tout ce qui sera affiché -->

    partie visuel

  </body>

</html>
```
La structure de la page comprend une partie pour les **elements masqués** --> `<head>` et une pour les **elements affichés** --> `<body>`.

La *structure affiché* est la base de tous fichiers `HTML`. Ces informations sont le minimum pour *rendre la page fonctionnelle.*

---
### Le `<head>`

la balise head contient les informations concernant la page. Certains elements lui sont indispensable et ils se presentent ainsi :

```html
<head>

  <meta charset="utf-8"> <!-- balise declarant le forat de l'alphabet utilisé,
    soit le l'alphabet français. -->

  <title>Titre de la page</title> <!-- titre qui sera affiché sur l'onglet
    de la page dans le navigateur -->

  <link rel="stylesheet" href="css/style.css"> <!-- link permet de lier un
    fichier exterieur au document html -->

</head>
```

---
### Le `<body>`

Le body represente tout ce qui sera affiché sur la page. il est lui aussi soumis à une structure definis. Il est séparé en 3 grands ensembles :

```html
<!DOCTYPE html>

<body>
    <header> <!-- contient les elements qui vont apparaitre sur toutes les
       pages : Menu, logo, bar de recherche... -->

    </header>

    <section> <!-- la balise section va permettre de délimiter un espace  -->

    </section>

    <footer> <!-- le footer va egallement apparaitre sur toutes les pages,
    il contient les informations secondaires mais à rendre accessible
    contacts, formulaire de news letter, copirights, plan du site -->

    </footer>
</body>

```

---
### Le `<header>`

Elements d'entête, le `header` contient ce qui sera necessaire à l'utilisateur pour identifier le site et naviguer dans ce dernier. Il peut contenir un grand nombre d'elements qui ne sont pas limité.
```html
<header>

  <img src="img/logo.jpg" alt="logo">

  <nav>
    <ul>
      <li>Accueil</li>

      <li>Gallerie</li>

      <li>Contacts</li>
    </ul>
  </nav>

  <h1>Titre de ma page</h1>

</header>
```
Dans cet exemple, on peu voir 3 element.

1. <u>`img`</u>

une balise qui se suffis à elle même. Cette balise contient des informations en vert dans des [*attributs*](#att) écris en orange.

2. <u>`nav`</u>

La **navigation** ou *menu*. C'est la pierre angulaire de votre site, il permet de circuler entre les pages ou parfois à l'interieur de la pages.

> La plupart du temps, on utilise une balise `<ul> <li>`--> **[liste ordonnée](#list)**, afin d'ordonner les elements du menu sous forme de **[liste à puce](#list)**. Ils seront ainsi plus facilement manipulables.

---
<a name="list"/>
#### Les listes

Les listes permettent dans d'ordonner les elements entre eux et de les structurer l'un en dessous de l'autre.

Il en existe plusieurs type mais les plus courantes sont la **liste à puce** et la **liste ordonnée**. Voici comment elles s'écrivent :

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

Les attributs nous permettent de specifier des informations relative à la balise dans laquel ils se situent.

La balise image prend par exemple deux paramètres, un attribut **src** pour *source* et un attribut **alt** pour le texte alternatif. **Le texte alternatif** permet d'afficher un texte à la place dune image lorsque celle ci ne s'affiche pas correctement. Il est aussi important pour ce que l'on appel le **referencement** qui permet aux moteurs de recherches comme google didentifier la page et de la classer parmis les autres.


Prenons une balise simple et regardons les differents attributs que l'on peut voir apparaitre
 ```html
<div  class="nomDeClass" onclick="foncionJS()" ... ></div>
 ```
On peut en trouver un grand nombre differents.

---
