#     # Concatenaciones son parecidas a las de javascript

# mensaje = "hola"
# mensaje+=" "
# mensaje+="Luis alverto villa real"


# n1 = 4
# n2 = 5

# resultado = n1 + n2
# print( f"el resultado es : {resultado}")  ###### ESTO SI FUNCIONA sin la "f" al inicio no se va a mostrar nuestra variable concatenada
# print("El resultado es : ", resultado)  # ESTO SI FUNCIONA
# print("El resultado es : " + resultado) # ESTO NO FUNCIONA

#     # (Los strings no tienen metodos de recorte de espacios en blanco al inicio o al final como se ve en el ejemplo)


#     # El mas solo funciona para concatenacion de valores del mismo tipo. EJ: int & int
#     # Para concatenacion de valores distintos es necesario la ","
#     # Para utlizar el mas (+) en concatenacion de valores de tipo diferente hay que transformar al valor primero

# potenciacion = n1**n2   # La potenciacion se logra utilizando dos asteriscos
# print(potenciacion)


# unDato = int(input())    # INPUT puede tener un mensaje de texto utlizando strings dentro de los parametros de input
# if unDato % 2 == 0:
#     print(unDato, "Es un par")
# else:
#     print(unDato, "No es impar")
    
#     # manejo extraño de cadenas. En este ejemplo se accede mediante un array al numero del caracter seleccionado (no su index)
# b = "Hello, World!"
# print(b[6:7])


#     # validacion de booleanos identica a otros lenguajes como javascript
# a = "a"
# b = "a"
# print(a == b)


#     # OBVIAMENTE no utilizar palabras reservadas para ninguna declaracion de variables
# Print = 5
# Else = 8
# If = Print + Else
# print(If)



#       # Metodos de manejo de string

#     # Super identico a sintaxis echa para javascript
# a = "Elver tacho larga"
# print(a.upper())

# b = "EAAAAAAa"
# print(b.lower(), "y es un: ", type(b))


#     # El manejo de strings lo podremos utilizar como en el ejemplo debajo
# txt = "We are the so-called \"Vikings\" from the north."
#     # Para mas usos vease:  https://www.w3schools.com/python/python_strings_escape.asp


# operacionFraccionaria = 10 // 1.88
# print(operacionFraccionaria)


            ## _____Loops____ ##

# arrayDePrueba2 = []
# while len(arrayDePrueba2) < 4:
#     valorEntrada = int(input("Ingresa un numero\n"))
#     arrayDePrueba2.append(valorEntrada)

# print(arrayDePrueba2)

#     #no es tipado
#     # hay que escribir print
# unArray = []

# for i in range(4):
#     num = int(input())
#     unArray.append(num)

# print(unArray)

#     # los bloques como "if", "for", "functions", etc no empiezan con corchetes ni nada de eso, 
#     # se utiliza organizacion de tabulacion.

# print(unArray[1]) 

class Moto:
    marca = "Bmw"
    modelo = "s1000rr"
    color = "Blanco y azul"
    cilindraje = "1000cc"

    def acelerar (self, km):
        print("Acelerando a {0}km".format(km))

# vehiculo = Moto()

# print(vehiculo.marca)
# print(vehiculo.modelo)
# print(vehiculo.cilindraje)

class Carro:
    def __init__(self, marca = None, modelo = "2019"):
        self.marca = marca
        self.modelo = modelo
        self.color = "rojo"

vehiculo2 = Carro()
print(vehiculo2.marca, vehiculo2.modelo, vehiculo2.color)