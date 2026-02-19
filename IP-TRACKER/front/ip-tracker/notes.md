v-bind pour lier un attribut à une donnée (dynamique), v-html, v-model
methods data
cycle de vie de vue :
data , props ,methods ,
beforeCreate(juste aprés l'initialisation de l'instance vue avant l'initialisation de toutes les autres données props data ....),
created (juste aprés que data props computed et methodes soient initialisés, parfait pour fetch des données à manipuler dans le dom aprés )
mounted (une fois que le dom est initailisé html accessible....)
v-bind une seule direction (html recoit une valeur statique)
v-model(bidirectionnelle s'il html change la data change aussi)
