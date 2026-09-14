const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let products = [
	{ id: 1, name: 'Laptop', price: 75000, category: 'Electronics' },
	{ id: 2, name: 'Headphones', price: 2500, category: 'Electronics' }
];
let nextId = 3;

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((item) => item.id === Number(req.params.id));

	if (!product) return res.status(404).json({ message: 'Product not found' });
	res.json(product);
});

app.post('/api/products', (req, res) => {
	const { name, price, category } = req.body;

	if (!name || price === undefined || !category || Number.isNaN(Number(price))) {
		return res.status(400).json({ message: 'name, price, and category are required' });
	}

	const product = { id: nextId++, name, price: Number(price), category };
	products.push(product);
	res.status(201).json(product);
});

app.put('/api/products/:id', (req, res) => {
	const index = products.findIndex((item) => item.id === Number(req.params.id));

	if (index === -1) return res.status(404).json({ message: 'Product not found' });

	const { name, price, category } = req.body;
	if (!name || price === undefined || !category || Number.isNaN(Number(price))) {
		return res.status(400).json({ message: 'name, price, and category are required' });
	}

	products[index] = { id: products[index].id, name, price: Number(price), category };
	res.json(products[index]);
});

app.delete('/api/products/:id', (req, res) => {
	const index = products.findIndex((item) => item.id === Number(req.params.id));

	if (index === -1) return res.status(404).json({ message: 'Product not found' });
	products.splice(index, 1);
	res.status(204).send();
});

app.listen(PORT, () => {
	console.log(`Product API running on http://localhost:${PORT}`);
});
