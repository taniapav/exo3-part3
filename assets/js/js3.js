function changeColor(elmnt){
// On stock dans une variable la valeur de l'attribut class de l'élément sur la quel on vins de qlicquer
  var classValue = elmnt.getAttribute('class');
// On utilise la fonction split pour éclater la chaine de caractère contenue dans la variable classValue. On stock le resultat dans la variable classArray qui devien un tableau.
// Attention les index de tableau commencent à 0 tableau[index].
  var classArray = classValue.split(' ');
//On applique au texte la couleur correspondant au deuxième élément de tableau.
  document.getElementById('text').style.color = classArray[1];
}

// pour faire l'exo 3 en une seul ligne :
//
// function changeColor(elmnt){
//   document.getElementById('text').style.color= elmnt.getAttribute('class').split(' ')[1];
// }
