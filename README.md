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
hamburger:
notare che ::after e ::before ereditano le dimensione degli element a cui li aggangiamo. è sempre inline

flex: se un suo child è absolute, non partecipa più nel flex.

uso top per sistemarlo per bene. in questo modo. 1 sta in alto, 2 sta a metà e 3 sta al margine sinistro.

1 => top: -450% (è il punto massimo)
2 => top:45%
3 => top: 450% (è il punto massimo)

ho usato solo valori relative. ho usato rem per il height e width del mio button. cosi che chi cambia il suo font size, avrà un visuale nitida del hamburger menu.

NON usare opacity sul 2nd item, inquanto fa diventare invisibile pure gli altri 2.
quindi con ::afeter e ::before: questi pseudo lement diventano rispettivamente il primo e l'ultimo figlio dell'elemento a cui lo associamo.

non posso targetizzare pseudo element con javascript ??

ANIMAZIONE:
Mettere il transition sia alla loro modalità active che quella normale, cosi che l'effetto dell'animation sia quando clicchiamo che quando riclicchiamo.

