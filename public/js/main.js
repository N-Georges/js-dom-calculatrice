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

const ajouterLigne = () => {
    // Réinitialise les variables
    nombre1 = null
    operation = null
    nombre2 = null
    total = null
}

// Permet d'afficher le calcul a l'ecran
const afficherEcran = text => document.getElementById('res').value = text

let display = document.querySelector('#res')
// supprimer un a un les chiffre
const supEcran = () => {
  display.value = display.value.substring(0, display.value.length -1)
}

// Permet de raffraichir le calcul a l'ecran apres l'operation effectuer et ainsi pouvoir effectuer un autre calcul
const rafraichirEcran = () => {
    let text = ''
    // Si le nombre de gauche n'est pas défini
    if (nombre1 == null) {
      // Réinitialiser l'écran et s'arrêter
      afficherEcran(text)
      return
    }
    // ... sinon, rajouter le nombre au calcul
    text += nombre1
    // Si l'opération n'est pas définie
    if (operation == null) {
      // Afficher la partie du texte connue et s'arrêter
      afficherEcran(text)
      return
    }
    // ... sinon, rajouter l'opération au calcul
    text += ` ${operation} `
    if (nombre2 == null) {
      afficherEcran(text)
      return
    }
    text += nombre2
    if (total == null) {
      afficherEcran(text)
      return
    }
    text += ` = ${total}`
    afficherEcran(text)
}

document.addEventListener('keydown', e => {
    const key = e.key
  
    switch (key) {
      case '0':
        saisirNombre(0)
        break
      case '1':
        saisirNombre(1)
        break
      case '2':
        saisirNombre(2)
        break
      case '3':
        saisirNombre(3)
        break
      case '4':
        saisirNombre(4)
        break
      case '5':
        saisirNombre(5)
        break
      case '6':
        saisirNombre(6)
        break
      case '7':
        saisirNombre(7)
        break
      case '8':
        saisirNombre(8)
        break
      case '9':
        saisirNombre(9)
        break
      case '+':
        saisirOperation('+')
        break
      case '-':
        saisirOperation('-')
        break
      case '*':
        saisirOperation('x')
        break
      case '/':
        saisirOperation('/')
        e.preventDefault()
        break
      case 'Enter':
        calculerTotal()
        break
      case '.':
      case ',':
        saisirDecimale()
        break
    }
})


// ecoute des operation et numero et liaison avec leur fonctions adequate
let addition = document.querySelector('#plus')
addition.addEventListener('click', () => saisirOperation('+'))

let soustraction = document.querySelector('#moins')
soustraction.addEventListener('click', () => saisirOperation('-'))

let multiplication = document.querySelector('#fois')
multiplication.addEventListener('click', () => saisirOperation('x'))

let division = document.querySelector('#divise')
division.addEventListener('click', () => saisirOperation('/'))

let zero = document.querySelector('#zero')
zero.addEventListener('click', () => saisirNombre(0))
let un = document.querySelector('#un')
un.addEventListener('click', () => saisirNombre(1))
let deux = document.querySelector('#deux')
deux.addEventListener('click', () => saisirNombre(2))
let trois = document.querySelector('#trois')
trois.addEventListener('click', () => saisirNombre(3))
let quatre = document.querySelector('#quatre')
quatre.addEventListener('click', () => saisirNombre(4))
let cinq = document.querySelector('#cinq')
cinq.addEventListener('click', () => saisirNombre(5))
let six = document.querySelector('#six')
six.addEventListener('click', () => saisirNombre(6))
let sept = document.querySelector('#sept')
sept.addEventListener('click', () => saisirNombre(7))
let huit = document.querySelector('#huit')
huit.addEventListener('click', () => saisirNombre(8))
let neuf = document.querySelector('#neuf')
neuf.addEventListener('click', () => saisirNombre(9))

let virgule = document.querySelector('#virgule')
virgule.addEventListener('click', () => saisirDecimale())

let egal = document.querySelector('#egal')
egal.addEventListener('click', () => calculerTotal())

let del = document.querySelector('#del')
del.addEventListener('click', () => rafraichirEcran())

let ac = document.querySelector('#ac')
ac.addEventListener('click', () => supEcran())

