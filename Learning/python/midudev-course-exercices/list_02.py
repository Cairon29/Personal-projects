from os import system
if system("clear") != 0: system("cls")

import math

###
# EJERCICIOS
###

# Ejercicio 1: El mensaje secreto
# Dada la siguiente lista:
# mensaje = ["C", "o", "d", "i", "g", "o", " ", "s", "e", "c", "r", "e", "t", "o"]
# Utilizando slicing y concatenación, crea una nueva lista que contenga solo el mensaje "secreto".


mensaje = ["C", "o", "d", "i", "g", "o", " ", "s", "e", "c", "r", "e", "t", "o"]

print(mensaje[:])

# Ejercicio 2: Intercambio de posiciones
# Dada la siguiente lista:
# numeros = [10, 20, 30, 40, 50]
# Intercambia la primera y la última posición utilizando solo asignación por índice.

numeros = [10, 20, 30, 40, 50]

inicio, fin = numeros[1], numeros[2]

numeros[0] = fin
numeros[-1] = inicio

print(numeros)

# Ejercicio 3: El sándwich de listas
# Dadas las siguientes listas:
# pan = ["pan arriba"]
# ingredientes = ["jamón", "queso", "tomate"]
# pan_abajo = ["pan abajo"]
# Crea una lista llamada sandwich que conteng0a el pan de arriba, los ingredientes y el pan de abajo, en ese orden.


pan = ["pan arriba"]
ingredientes = ["jamón", "queso", "tomate"]
pan_abajo = ["pan abajo"]


sandwich = pan + ingredientes + pan_abajo

print(sandwich)

# Ejercicio 4: Duplicando la lista
# Dada una lista:
# lista = [1, 2, 3]
# Crea una nueva lista que contenga los elementos de la lista original duplicados.
# Ejemplo: [1, 2, 3] -> [1, 2, 3, 1, 2, 3]

lista = [1, 2, 3]

duplicada = lista[:] + lista

print(duplicada)

# Ejercicio 5: Extrayendo el centro
# Dada una lista con un número impar de elementos, extrae el elemento que se encuentra en el centro de la lista utilizando slicing.
# Ejemplo: lista = [10, 20, 30, 40, 50] -> El centro es 30

lista = [10, 20, 30, 40, 50]

centro = math.floor(len(lista) / 2)

print(f"El centro es {lista[centro]}")


# Ejercicio 6: Reversa parcial
# Dada una lista, invierte solo la primera mitad de la lista (utilizando slicing y concatenación).
# Ejemplo: lista = [1, 2, 3, 4, 5, 6] -> Resultado: [3, 2, 1, 4, 5, 6]

lista = [1, 2, 3, 4, 5, 6]

mitad = math.floor(len(lista) / 2)

primera_mitad = lista[:mitad]
primera_mitad = primera_mitad[::-1]

segunda_mitad = lista[mitad:]
print(primera_mitad + segunda_mitad)