# Inheritance activiry with "Hypercars"

class HyperCar:
    def __init__(self, name, brand, topSpeed, price):
        self.name = name
        self.brand = brand
        self.topSpeed = topSpeed
        self.price = price

    def description(self):
        print(f"{self.name} is now one of the most exclusive cars when it comes to {self.brand}.\n"
                f"With a top speed around the {self.topSpeed}km/h this Hypercar turned into the most\n"
                f"expensive machine in this large brand in year with a cost of {self.price}.\n"
                f"An absolute masterpiece.")
            
class Koenigsegg(HyperCar):
    def fact(self):
        print("""
                On November 4th, 2017, the Koenigsegg 
                Agera RS achieved five new world records 
                for a production vehicle in Pahrump, 
                Nevada, USA. Driven by factory driver,  
                Niklas Lilja, the Agera RS attained the 
                highest top speed for a production vehicle, 
                calculated using an average of two runs - 
                one in either direction. The record speed 
                achieved was 447.19 km/h (277.87 mph). On 
                the same day, the Agera RS clocked 33.29 
                seconds from 0-400-0kmh, beating the 
                previous time of 36.44 seconds set by the 
                same car in Denmark one month earlier. 
                The highest average speed for a flying 
                kilometer on a public road was also 
                recorded, calculated after running the car in 
                two directions, at 445.63 km/h. A new 
                flying mile record was also achieved, at 
                444.76 kmh. Lastly, the RS also saw the 
                highest speed achieved on a public road 
                (single direction), measured at 457.94 km/h 
                (284.55 mph).
            """)
        

class Pagani(HyperCar):
    def fact(self):
        print("""
            Horacio Pagani left Lamborghini in the early 1990s
            because the company was not interested in investing 
            in advanced carbon fiber technology, which Pagani 
            believed was crucial for the future of high-performance 
            cars. Despite his efforts to push for innovation, 
            Lamborghini's management rejected his proposals. 
            This led Pagani to establish his own company, Pagani 
            Automobili, where he could freely explore cutting-edge 
            materials and design philosophies, ultimately creating 
            his own supercars.
        """)

class ChaparralCars (HyperCar):
    def fact(self):
        print("""
            The Chaparral 2J, also known as the "sucker car," was 
            banned from racing on 1960. Primarily because of its revolutionary 
            fan-based aerodynamic system. The car used two fans powered 
            by a separate two-stroke engine to create a vacuum underneath 
            the car, generating unprecedented downforce. 
            This allowed the 2J to stick to the track more effectively, 
            giving it a significant performance advantage, especially in corners.

            While not technically against the rules at the time, rival 
            teams argued that the car's use of the fan system was 
            unfair and didn't align with the spirit of the regulations.
        """)

agera_RS = Koenigsegg("Agera RS", "Koenigsegg", "446.97", "4 million dollars")
agera_RS.description()
agera_RS.fact()


huayra = Pagani("Huayra", "Pagani", "383 km/h", "3.4 million dollars")
huayra.description()
huayra.fact()

chaparral_2J = ChaparralCars("Chaparral 2J", "Chaparral Cars", "245 km/h", "Unique")
chaparral_2J.fact()