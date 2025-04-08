import express from 'express';
import crypto from 'crypto';
import { validateMovie } from './schema/movieSchema.js'
import { validateProduct } from './schema/productSchema.js';
import { readFile } from 'fs/promises';

const movies = JSON.parse(
    await readFile(
        new URL('./movies.json', import.meta.url)
    )
);

const products = JSON.parse(
    await readFile(
        new URL('./products.json', import.meta.url)
    )
);
const app = express();
const port = 3456;


// Add this line to parse JSON bodies
app.use(express.json());

// yourFavoritePage.com /movies ← this is the route
app.use((req, res, next) => {  // Fixed parameter order
    if (req.method === 'POST' && req.url === '/movies') {
        console.log('Middleware movies');
        next();
    } else {
        next();
    }
})


//       ↓ yourFavoritePage.com/
app.get('/', (req, res) => {
    res.status(200).json({ message: `app running on port ${port}` });
})

app.get('/movies', (req, res) => {
    res.status(200).json(movies);
})

app.post('/movies', (req, res) => {
    const newId = crypto.randomUUID();

    const result = validateMovie(req.body);
    
    if (!result.success) {  // Changed condition
        return res.status(400).json({ error: result.error });
    }

    const newMovie = {
        id: newId,
        ...result.data  // Use result.data instead of result
    }

    movies.push(newMovie);  // Changed array mutation method

    res.status(201).json(newMovie);
})

app.get('/products', (req, res) => {
    const { tag } = req.query;
  
    if (tag) {
        const filteredProducts = products.filter(product => 
            product.tags.some(t => t.toLowerCase() === tag.toLowerCase())
        );
        if(filteredProducts.length === 0) {
            return res.status(400).json({message: "Products not found"});
        } else {
            console.log(filteredProducts);
            
            return res.status(201).json(filteredProducts);
        }
    }
    res.json(products);
})


app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.productId === id);

    if (!product) {
        res.status(400).json({ message: "Product not found"});
    }

    res.status(200).json(product);
})

app.post('/products', (req, res) => {
    const newId = crypto.randomUUID();
    const result = validateProduct(req.body);

    if (!result.success) {
        return res.status(400).json({ message: result.error });
    }

    const newProduct = {
        productId: newId,
        ...result.data
    }

    products.push(newProduct);
    res.status(201).json(newProduct);
})

app.use((req, res) => {  // Fixed parameter order
    res.status(404).json({message: 'page not found'})
})

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})

