textData = [
    "hello world",
    "hello world",
    "python is easy",
    "python is easy",
    "C# > php",
    "C# > php",
    "C# > php"
]

def map_function(text): 
    mappedValues = []

    for line in text:
        for word in line.split():
            mappedValues.append((word, 1))
    return mappedValues

