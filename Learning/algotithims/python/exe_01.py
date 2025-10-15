# _______ FIBONACCI _______

a = 0
b = 1

for i in range(100):
    if i == 0:
        print(f'{a}\n{b}')
    c = a + b
    print(c)
    a = b
    b = c
    
    
# lo logre >:)