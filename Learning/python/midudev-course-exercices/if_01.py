numero1, numero2 =  input('introduce dos numeros\n').split()

if numero1 and numero2:
    print(f'{numero1} + {numero2} = {int(numero1) + int(numero2)}')
else:
    print('Numeros incompletos')

numero3, numero4, operacion = input('Introduce dos numeros y una operacion logica  (+, -, *, /)').split() 

if operacion == '+':
    print(f'{numero3} + {numero4} = {int(numero3) + int(numero4)}')
elif operacion == '-':
    print(f'{numero3} - {numero4} = {int(numero3) - int(numero4)}')
elif operacion == '*':
    print(f'{numero3} * {numero4} = {int(numero3) * int(numero4)}')
elif operacion == '/':
    print(f'{numero3} / {numero4} = {int(numero3) / int(numero4)}')

año = input('introducelo')

if (año % 4 == 0 and año % 100 == 0 and año % 400 != 0):
    print('es bisiesto')
else:
    print('no es bisiesto')

edad = input('introduce tu edad')

if edad >= 0 and edad <= 2:
    print('bebe')
elif edad >= 3 and edad <= 12:
    print('nino')
elif edad >= 13 and edad <= 17:
    print('adolescente')
elif edad >= 18 and edad <= 64:
    print('adulto')
elif edad >= 65:
    print('adulto mayor')
else:
    print('edad incorrecta')

ternario = 'a' if edad >= 18 else 'b'
print(ternario)