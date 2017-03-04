# Le Html 5 et Css 3

***
[Environnement de travail](#env)

***

Liebn sur un petit cours sur les balises Html:

 [http://41mag.fr/liste-des-balises-html5](http://41mag.fr/liste-des-balises-html5)

<a name='env'/>
## Environnement de travail

### Install Package

 Les guides d'indentation


* Ouvrir --> `settings`
* `Install`
* chercher `Indent guide improved`

### Install Xampp

1. Telecharger Xampp
2. Lancer l'installation
3. Installer l'application sur un disque possedant suffisemment d'espace
4. Localiser les fichiers dans
 `Explorer > CePc > C: > Xampp > Htdocs`
5. **Modifier** le dossier htdocs en créant un dossier dashboardXampp et mettre tous les dossiers present à l'interieur de celui ci dans dashboardXampp.
6. Votre installation est prête !

## Html-Css

### index.html

> le fichier `index.html` se nomme ainsi car il est le fichier qui va être charrgé par defaut par le navigateur internet.



```html

<!DOCTYPE Html>
<html>
  <head>
    <!-- ici se trouvent les informations
    relatives à l'aspect fonctionnel de la page / informations en arrière plan. :
    l'encodage des caracteres (Utf-8), link pour typo...   -->
  </head>
  <body> <!-- Contenu visible du site -->
    <header>
      <!-- Informations de fonctionnement relatives au site (menu, barre de recherche, Log in, logo ou h1 titre principale.)  -->
    </header>
    <section>

    </section>
    <footer>
      <!-- Bas de page (coordonnées, navigation secondaire, etc…) -->
    </footer>
  </body>
</html>
```

### **Indentation**

> Manière de structurer le code pour nous permettre de clarifier son travail.
> **Nécessaire pour le travail à plusieurs** et pour être embauché :sunglasses:
Permet de se repérer plus facilement dans la hiérarchie.

### section / article / div / nav

#### A l'origin, il n'y avait que la div...

 > Dans les versions de html precedentes, il n'existait qu'une faible diversité de balise englobante. La plus utilisé était donc la div. Elle permettait *d'encapsuler* un ensemble d'elements afin de lui appliquer des modifications.



`Div` : balise bloc

Cette balise permet de manipuler un ensemble d'éléments.

#### section / articles ..

> A partir du Html5 les balises sections et articles sont apparuent pour ajouter des elements de structure dans la page. On à créer entre autre ces deux balises pour répondre à un besoins semantics et améliorer la structuration de la page.


*Du plus grand ensemble au plus petit :*
```html
<Section>
  <Article>
	  <Div>
```

 * `section` sera utilisé pour un grand ensemble
 * `article` pour un bloc contenant un article ( sous-titre, paragraphe. )
 * `div` un ensemble plus ou moin grand de type indéfinis

! ne pas oublier d’enregistrer et de recharger la page pour avoir un visuel de son code!

Supplements :
on sélectionne :
  <head>
  </head>
  <body>
  </body>
et on appuis sur la touche Tab ou shift Tab

dans le <head> les métadonnée   

<html>
  <head>
    <meta charset="Utf-8">
    <meta name="twitter:" content="utf-8"
    <title>Index de demo</title>

<meta name="Utf-8">  est une information sur le style de caractère utiliser sur le fichier.




Body(généralement en haut de la page)

dans body (exclusif au body)

  <body>				
    <header>

    </header>
    <footer>

    </footer>
  </body>


Footer(en bas de la page généralement avec les réseaux sociaux et contacts )



nav c’est pour naviguer dans les sites
La nav correspond au Menu, elle va servir à naviguer dans un site
div c’est un bloc d'éléments
<div class="">
on ouvre Xamp control pannel  / conflit avec skype !!
On autorise Apache qui un émulateur  qui exécutera le code d’Atom

dans chrome on écrit localhost puis apres Html-Css et index01.hml
http://localhost/Html-Css/index01.html
<p></p>(p=paragraph)( P+Tab => ouvre et referme la balise paragraphe)
<p>Lorem et Tab</p>

si besoin aller dans View et mettre Toggle Soft Wrap pour supprimer l’espace dans <p>lorem</p>

Lorem ipsum est seulement un exemple de texte.





<article> , <section> ,  sont des balises qui ont la même utilisation, ils vont servir à sélectionner une grosse partie pour pouvoir la modifier.

google color



exemple pour modifier la couleur du fond d’écran.
#26A69A est un code couleur.
Ne pas oublier le point virgule à la suite de la couleur.



margin 50px 25 px
50 pour haut et bas et 25 pour gauche et droite
pour les marges ca marche de la manière suivante: haut, droite, bas, gauche
Pour centrer un texte: text-align: center;



Exemple de code CSS


Insérer une image:
  <h1>Titre Principal</h1>
      <img src="img/xx.jpg" alt="Logo xx">


Retoucher l’image:
      img{
        width:25%;
        height:auto;
      }
      header img{
        width:10%;
      } ???


Ctrl+Maj+/ pour mettre en pause une ligne (commenter une ligne)

Les commentaires :
	Les commentaires servent à noter des informations textuels au milieu du code sans perturber son exécution. Ils peuvent également servir à masquer une partie du code sans avoir à effacer son contenus.
	raccourcis clavier : Ctrl + Maj + /

commentaires en html : `<!--  Zone de commentaire -->`
commentaire en CSS : `/*  Zone de commentaire   */`

Déplacer un paragraphe d’un emplacement à un autre:
ctrl + flèche haut / bas.
Lexique :
Définitions générales Css :

		Class :
Éléments central du html / css, les classes permettent de sélectionner plusieurs éléments et de leur appliquer du style dans l’ensemble.
On définit à travers les classes, des propriétés communes à plusieurs éléments.

		Id :
	Identité de la balise, l’attribut ID permet d’identifier un balise précisément. Elle va nous permettre d’appliquer du style qui ne doit apparaître que sur cet élément.

		Typo / Font / Police de caractère :
	La police de caractère correspond à ce que l’on nomme en css la font-family.
Ce sont les visuels de caractère qui vont nous permettre de changer l’affichage du texte.

On peut les récupérer sur  google font ou Dafont et les charger via un système de balise <link> ou directement dans le css via ce que l’on appel les media queries

Terminologies Html / Css :

<head> : Le head contient toutes les <meta> ou métadonnée. Ce sont les informations structurelles de la page qui n'apparaîtront pas directement à l'écran mais qui sont nécessaire pour le bon fonctionnement de la page.

<body> : Représente le corps de la page HTML.(un seul par document)

<header> : Partie haute de la page web/html. Contient en général le <h1> et la navigation <nav>

	<link>  : balise servant à charger du contenus CSS -- police + feuille de style

	<p> définit un paragraphe.
<span> : pour sélectionner une partie du texte que l’on veut modifié.
<strong> / <b> : affiche un texte en gras
<u> : souligne un texte
<i> : affiche le texte en italique
<em> : italique ou gras pour un texte ( dépend du navigateur )
<div> :définit une division ou une section,appelé aussi calque


.container : la classe container va nous servir à définir un espace donné qui contient les données dans une partie de la page. C’est une classe que l’on définit soi même.

attributs : les attributs sont les informations notées

	float → left / right :
Mettre une image en habillage du texte
positionner un élément à droite ou à gauche d’un autre.
inconvénients : sort du flux → certaines propriétés ne fonctionnent pas et les éléments ne sont plus relatif entre eux

	font-family :change la police de caractères

	display :
		inline : aligne les éléments les uns à la suite des autres.
		block : réserve tout l’espace disponible sur la ligne, illustré par une marge qui remplis l’espace.
		inline-block : lorsque des éléments inline-block sont côte à côte, ils se mettent à la suite et ensemble, forment un block.
