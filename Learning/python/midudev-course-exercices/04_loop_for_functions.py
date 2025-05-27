from os import system
if system("clear") != 0: system("cls")


###
# EJERCICIOS (for)
###

# Ejercicio 1: Imprimir números pares
# Imprime todos los números pares del 2 al 20 (inclusive) usando un bucle for.
print("\nEjercicio 1:")

for num in range(2, 12):
    if num % 2 == 0:
        print(num)

# Ejercicio 2: Calcular la media de una lista
# Dada la siguiente lista de números:
# numeros = [10, 20, 30, 40, 50]
# Calcula la media de los números usando un bucle for.
print("\nEjercicio 2:")

numeros = [10, 20, 30, 40, 50]

def media(arr): 
    total = 0
    for num in arr:
        total += num
    media = total / len(arr)
    return media

print(media(numeros))

# Ejercicio 3: Buscar el máximo de una lista
# Dada la siguiente lista de números:
# numeros = [15, 5, 25, 10, 20]
# Encuentra el número máximo en la lista usando un bucle for.
print("\nEjercicio 3:")

numeros = [15, 5, 25, 10, 20]

def maximo_lista(arr):
    return max(arr)

print(maximo_lista(numeros))


# Ejercicio 4: Filtrar cadenas por longitud
# Dada la siguiente lista de palabras:
# palabras = ["casa", "arbol", "sol", "elefante", "luna"]
# Crea una nueva lista que contenga solo las palabras con más de 5 letras
# usando un bucle for y list comprehension.
print("\nEjercicio 4:")

palabras = ["casa", "arbol", "sol", "elefante", "luna"]

def mas_de_cico(arr):
    return [word for word in arr if len(word) > 5]
print(mas_de_cico(palabras))
    

# Ejercicio 5: Contar palabras que empiezan con una letra
# Dada la siguiente lista de palabras:
# palabras = ["casa", "arbol", "sol", "elefante", "luna", "coche"]
# Pide al usuario que introduzca una letra.
# Cuenta cuántas palabras en la lista empiezan con esa letra (sin diferenciar mayúsculas/minúsculas).

print("\nEjercicio 5:")

palabras = ["casa", "arbol", "sol", "elefante", "luna", "coche", "camion", "cum"]

def encuentra_palabras(letra, arr):
    palabras_encontradas = []
    for palabra in arr:     
        # if palabra.startswith(letra):
        if palabra[0].lower() == letra.lower():
            palabras_encontradas.append(palabra)
    return palabras_encontradas


letra = input("Introduce una letra: ")
print(encuentra_palabras(letra, palabras))
