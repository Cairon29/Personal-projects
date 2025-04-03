### DATA LAKE EXERCISES

from datetime import datetime # import the datetime module to get our current year

#raw data
raw_data = [
    {"name": "john", "age": 25, "city": "New York"},
    {"name": "jane", "age": 30, "city": "San Francisco"},
    {"name": "bob", "age": 35, "city": "Seattle"},
    {"name": "alice", "age": 40, "city": "Los Angeles"},
    {"name": "jim", "age": 45, "city": "Chicago"}
]

def process_data(data):
    processed_data = []
    current_year = datetime.now().year

    for person in data:
        person["age"] = current_year - person["age"]
        processed_data.append(person)

    return processed_data

processed_data = process_data(raw_data)

def olderThan30(data):
    older = []
    for person in data:
        if person["age"] > 30:
            older.append(person)
    return older

# function to generate a report of people settle in each city
def report(data):
    report = {}

    for person in data: 
        city = person["city"]
        if city in report:
            report[city] += 1
        else:    
            report[city] = 1

    return report

print(report(processed_data))