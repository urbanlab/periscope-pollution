# Periscope

Pollution project for UrbanLab/ DSAA sprint 2017 using WebVR / A-Frame.
Observer la qualité de l’air
https://www.erasme.org/Polluscope
https://github.com/urbanlab/polluscope

Rendre visible les particules et sensibiliser aux comportements clefs liés à la pollution
Polluscope est un mobilier urbain augmenté pour observer en temps réel le niveau de particules présentes autour de vous.

En jouant à un jeu sérieux questionnant sur les idées reçues concernant la pollution, il permet d'acquérir les informations et les gestes clefs à adopter pour préserver la qualité de l’air et se protéger en cas de pic de pollution.
Comment ça marche ?
Le prototype reprend la forme d'un périscope de sous-marin qui intègre un casque de réalité augmentée.

Implanté dans l'espace public, il immerge l'utilisateur dans son environnement augmenté des particules ( fines, ozone, dioxyde d'azote) et des données "temps réel" (pollution, pollen).

En pointant un point d'intérêt présent dans le lieu (transport, pollution intérieure, vélo...) l'utilisateur doit répondre à une question et obtient une recommandation de bonne pratique concernant la thématique.

## Getting Started

### Guide d'installation du Polluscope

Installer nodejs depuis le site officiel : https://nodejs.org/

L'assistant d'installation installera également npm

Après avoir cloné le dépôt ou téléchargé l'archive du Polluscope, ouvrir un terminal dans le dossier polluscope

Lancer la commande 

    npm install

Tout est désormais prêt pour lancer le polluscope

Toujours dans le dossier polluscope, lancer la commande 

    npm start

Une page de votre navigateur va s'ouvrir en lançant l'application. Copiez l'url de cette page.Vous pouvez ensuite la fermer si vous le désirez.

Sur votre smartphone récent, installez le navigateur yandex browser (depuis le play store par exemple).

Sur ce navigateur, collez l'url précédemment copié. 

Passez en mode VR et placez votre smartphone dans un cardboard, et profitez de l'expérience Polluscope.

## Publishing your scene

    npm run deploy

And, it'll now be live at https://urbanlab.github.io/periscope-pollution :)

## Resize video

Downsize video and remove sound

    ./bin/bin/downsize_video.sh my_video.mp4


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)

If you wish to serve the site from a different port:

    PORT=8000 npm start


## License

This program is free software and is distributed under an [MIT License](LICENSE).

## Contacts
- Pollution, scénarios et données en temps réel: ICLOSTRE@atmo-aura.fr et AFREI@atmo-aura.fr (isabelle et andrew) de chez Atmo AURA 

## Evolutions 
1. Pour le scénario
--------------------

- Présence de 7 nouveaux scénarios principaux: points d'intérêts vélo, boulevard, rue peu fréquentée, parc, bosquet, bâtiment public, transport en commun.
- Affichage de l'indice de pollution sur la scène principale.
- Présence d'un point d'intérêt spécial (vert) permettant d'afficher les données de pollution.
- Nouvelles questions de début de scénario et réponses de fin de scénario.
- Nouveaux points d'intérêts annexes au sein des scénarios.
- Ajout de "messages périphériques" au sein de certains scénarios. 
- Scénario et contenu écrits en partenariat avec Atmo AURA


2. Pour la gestion des données en temps réel
-------------------------------------------------------

- Partenariat avec Atmo AURA pour l'accès aux données en temps réel
- Indice et taux de pollution en temps réel (par arrondissement)
- Indice de taux de pollen et liste des principaux pollens présents dans l'air (par arrondissement, de façon hebdomadaire)
- Texte de prévention vis-à-vis des risques des pollens (mise à jour hebdomadaire également)
- Densité des particules sur la scène principale proportionnelle au taux de pollution en temps réel

3. Pour la reproductibilité
-------------------------------

Application et scénarios gérables et reproductibles.
Fichier de configuration ***config.json** pour configurer:

- Les vidéos à intégrer dans le dispositif
- La position d'affichage du point d'intérêt donnant accès aux données de pollution en temps réel (ainsi que le code insee de l'arrondissement souhaité)
- Liste des scénarios (id, question d'ouverture, temps d'affichage de la question, vidéo à lancer pour l'immersion, taux de pollution dans le scénario, données annexes à afficher dans le scénario, etc.)
- Liste des points d'intérêts principaux pour lancer les scénarios (position, rotation, taille, scénario à lancer, etc.)
- Liste des points d'intérêts secondaires au sein des scénarios (position, rotation, taille, réponse de fin de scénario et temps d'affichage de la réponse, etc.)
- Liste des données annexes (ou messages périphériques) à afficher au sein des scnénarios (texte, taille, position, rotation, etc.)

