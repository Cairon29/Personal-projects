import crypto from 'crypto'
import bikes from '../bikes.json' with { type: 'json' }
export class BikeModel {

    static async getAll ({ id }) {

        let response = {
            status: 200,
            value: bikes
        }
        
        if (id) {
            const bike = bikes.find(b => b.id === id);
            
            if (bike) {
                response = { ...response, status: 200, value: bike } 
                return response;
            }
            
            response = { ...response, status: 404, value: { message: 'No bike found with that ID' } } 
            return response
        }
        return response
    }

    static async getBrand ({ brand }) {

        let response = {
            status: 400,
            value: { message: `There are no bikes with the ${brand} brand`}
        }

        const brandBikes = bikes.filter((bike) => bike.brand.toLocaleLowerCase() === brand.toLocaleLowerCase())
        if (brandBikes.length > 0 ) {
            response = { ...response, status: 404, value: brandBikes }
            return response
        }

    }

    static async create ({ data }) {
        const newId = crypto.randomUUID()
        const newBike = {
            id: newId,
            ...data
        };
    
        bikes.push(newBike)

        return { status: 201, value: newBike}
    }

    static async modifyBike ({ data, bikeIndex }) {
        const modifiedBike = {
            ...bikes[bikeIndex],
            ...data
        }
        bikes[bikeIndex] = modifiedBike

        return modifiedBike
    }

    static async delete ({ id }) {

        const bikeIndex = bikes.findIndex(b => b.id === id);

        let response = {
            status: 404,
            value: { message : 'Bike not found'}
        }

        if (bikeIndex === -1) {
            return response
        }

        bikes.splice(bikeIndex, 1);

        return response = {...response, status: 200, value: { message: 'Bike deleted'}}

    }
} 