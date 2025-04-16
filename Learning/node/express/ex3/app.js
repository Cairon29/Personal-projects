import express from 'express'
import bikes from './bikes.json' with { type : "json"}
import crypto from 'crypto';

const app = express()
app.use(express.json())
app.disable('x-powered-by')

/*___________________________________________________ */


app.get('/', (req, res) => {
    res.status(200).json(bikes)
})

app.get('/bikes/:brand', (req, res) => {
    const { brand } = req.params;
    const brandBikes = bikes.filter((bike) => bike.brand.toLocaleLowerCase() === brand.toLocaleLowerCase())
    
    if (brandBikes.length > 0 ) {
        return res.status(200).send(brandBikes)
    }

    res.status(404).send({ message: `There are no bikes with the ${brand} brand`})
})

app.get('/bikes', (req, res) => {
    const { id } =  req.query;
    const bike = bikes.find(b => b.id === id)

    if (bike) {
        return res.status(200).send(bike)
    }

    res.status(404).send({ message: 'No bike found' })
})

/* TODO: Make more endpoints with POST, PATCH, PUT, DELETE, and get endoints with various query params*/


/*___________________________________________________ */

app.use((req, res) => {
    res.status(204).send({ message: "Route not found"})
})

const PORT = process.env.PORT ?? 7890

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})