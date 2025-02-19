# ___ PYTHON ___

print("hello world")

# Separator:
# In this case the words are going to be separated by "-"
print("hello", "world", sep = "-")

# Data types:

print(type(5)) # = <class 'int'>
print(type(5.5)) # = <class 'float'>
print(type(True)) # = <class 'bool'>
print(type("hello")) # = <class 'str'>
print(type(5 + 5j)) # = <class 'complex'>
print(type(None)) # = <class 'NoneType'> ← This is a special type in Python, and its the most similar to undefined and null in JS

print(type(int("100"))) # = <class 'int'>
print(type((4 + int("100")))) # = <class 'int'>

# Variables:

my_name = "David"
my_name = "David2"
print(my_name)

my_name = 32
print(my_name)
# f-string:
print(f"My name is {my_name}")

# Constants:
MY_SIMULATED_CONSTANT = 100
print(MY_SIMULATED_CONSTANT)
MY_SIMULATED_CONSTANT = 1
print(MY_SIMULATED_CONSTANT) # even though we can change the value of a constant is not recomended