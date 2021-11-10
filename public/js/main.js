'use strict'
// Nombre à gauche de l'opération
let nombre1

// Contenu du signe de l'opération (+, -, x, /)
let operation

// Nombre à droite de l'opération
let nombre2

// Total du calcul
let total

// Ajouter un nombre au calcul
const saisirNombre = nombre => {
    // Si l'opération n'est pas encore connue
    if (operation == null) {
      // ... modifier le premier nombre
      // Si le nombre ne contient rien
      if (nombre1 == null) {
        // ... initiliser la variable
        nombre1 = ''
      }
  
      // Ajouter le nombre à la suite
      nombre1 += nombre.toString()
    } else {
      // ... sinon, modifier le 2eme nombre
      if (nombre2 == null) {
        nombre2 = ''
      }
  
      nombre2 += nombre.toString()
    }
  
    rafraichirEcran()
  }

  // Ajouter une décimale
const saisirDecimale = () => {
    // Si l'opération n'est pas encore connue
    if (operation == null) {
      // ... modifier le premier nombre
      // Si le nombre ne contient rien
      if (nombre1 == null) {
        // ... initialiser et rajouter un 0
        nombre1 = '0.'
      } else if (aDecimal(nombre1) === false) {
        // Si le nombre n'a pas encore de décimale
        // ... ajouter un séparateur
        nombre1 += '.'
      }
    } else {
      // ... sinon, modifier le 2eme nombre
      if (nombre2 == null) {
        nombre2 = '0.'
      } else if (aDecimal(nombre2) === false) {
        nombre2 += '.'
      }
    }
    rafraichirEcran()
  }

// Detecter si un nombre à une décimale
const aDecimal = nombreText => nombreText.indexOf('.') >= 0

// Définie l'opération du calcul
const saisirOperation = sigle => {
    // Si l'opération est déjà choisie
    if (operation != null) {
      // Ignorer et arrêter
      return
    }
  
    // ... sinon, assigner la valeur
    operation = sigle
    rafraichirEcran()
}

const calculerTotal = () => {
    // Vérifier si toutes les valeurs ont été définies
    if (nombre1 == null
    || nombre2 == null
    || operation == null) {
      return
    }
  
    const n1 = parseFloat(nombre1)
    const n2 = parseFloat(nombre2)
  
    switch (operation) {
      case '+':
        total = n1 + n2
        break
      case '-':
        total = n1 - n2
        break
      case 'x':
        total = n1 * n2
        break
      case '/':
        total = n1 / n2
        break
    }
  
    rafraichirEcran()
    ajouterLigne()
}
