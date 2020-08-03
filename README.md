# Oriabure-Farms
## Technologies
### Frontend
Html;
* Css:
    * sass: css preproccesor;
    * BEM: userò BEM ma con l'eccezione che, quelli nested con content e item avranno solo hypen "-";
* Javascript:
    * anime.js --> javascript animation library;
    * vanilla javascript;


### Backend:
php: backend scripting language;
mysql: data base;

### Tools:
git: version control;
debug tools;
accessibility tools;
performance tools;

## Stages
* Git: l'ho finito per primo, in quanto indispensabile per iniziare e finire il progetto senza intoppi
    * dove: [Git crash course freecodecamp](youtube.com)
* Sass: ho aquisito nozioni base. scoprirò poi piano piano le altre peculiarità dalla documentazione officiale
    * dove: 
* anime.js : dato che c'è pocco materiale su youtube. lo vedrò via via direttamente dal documentation.
    * dove:
* vanilla javascript --> ho imparato il dom, ma ho ancora da imparare.
    * dove: 

## Project Fase

### Day 1
ho usato gitignore.io per creare il linguaggio per ignorare i file scss.

per prima cosa ho creato su scss: base e theme, dove base contiene: il mio personale reset css (molto corto) + normalize css. e theme contiene lo stile che voglio dare alla pagina, quindi COLORS e TYPOGRAPHY.
ho creato per ora solo il markup del nav. ma penso che devo aggiungere anche il div container che ho visto aggiungere da powell


### Day 2
---
#### hamburger
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

### Day 3/4

Ho finito l'hamburger:
dato che il pseudo element non puo' essere targetizzato direttamente su javascript, ho usato il selector
PARENT-SELECTOR CHILDSELECTOR {}. sia per before che per after. perchè ricordiamo che i pseudo element sono figli dell'elemento a cui lo agganciiamo.

#### Navigation:
per il navigation:
ul --> 
display:flex
position:absolute //per poterlo co


### Day5
** diciamocelo. mi sono un po' incasinato. dato che ho skippato alcunne fasi del mio work flow. volevo fare veloce ma alla fine, ho finito per incasinare tutto.
quindi ora mi tocca riordinare prima di pensare anche minimamente di rprendere come si deve. **

