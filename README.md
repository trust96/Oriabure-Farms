# Oriabure-Farms
technologies used in this project will be:
sass --> css preproccesor
    BEM: userò BEM ma con l'eccezione che, quelli nested con content e item avranno solo hypen "-".
anime.js --> javascript animation library
html
vanilla javascript
small portion of backend:
php --> backend scripting language
mysql --> data base

tools:
git --> for version control;
firefox/chrome javascript debug ; how to debug javascript in general;
accessibility tools;
performance tools;

#     stages
git --> dato che è la parte iniziale;
sass --> ho fatto un riassunto veloce , giusto per potersi mettere nella pratica (tenere d'occhio il video e la documentazione.
anime.js --> da vedere pian piano sulla documentazione mentre lo implemento.
vanilla javascript --> ho imparato il dom.

                                                day 1
ho usato gitignore.io per creare il linguaggio per ignorare i file scss.

per prima cosa ho creato su scss: base e theme, dove base contiene: il mio personale reset css (molto corto) + normalize css. e theme contiene lo stile che voglio dare alla pagina, quindi COLORS e TYPOGRAPHY.
ho creato per ora solo il markup del nav. ma penso che devo aggiungere anche il div container che ho visto aggiungere da powell


                        day 2
notare che ::after e ::before ereditano le dimensione degli element a cui li aggangiamo.

per hamburger menu: uso postion absolute per il container (position : realtive => per il mio nav). position : absolute per before , after e il mio div.
flex: se un suo child è absolute, non partecipa più nel flex.

uso top per sistemarlo per bene.
1 => top: da calcolare
2 => top:50%
3 => top: da calcolare

devo usare più valori relative possibili