# Periscope

Pollution project for UrbanLab/ DSAA sprint 2017 using WebVR / A-Frame.

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
