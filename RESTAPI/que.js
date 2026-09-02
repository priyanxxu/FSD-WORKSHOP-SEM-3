// create a rest api for 100 products with id, name, price, description, and category. Implement GET, POST, PUT, and DELETE methods for the products.
import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

const products = Array.from({ length: 100 }, (_, index) => ({
	id: index + 1,
	name: `Product ${index + 1}`,
	price: Number((9.99 + index * 2.5).toFixed(2)),
	description: `Description for Product ${index + 1}`,
	category: ["Electronics", "Home", "Clothing", "Books"][index % 4]
}));

app.get("/products", (req, res) => {
	res.json(products);
});

app.get("/products/:id", (req, res) => {
	const product = products.find((item) => item.id === Number(req.params.id));

	if (!product) {
		return res.status(404).json({ message: "Product not found" });
	}

	res.json(product);
});

app.post("/products", (req, res) => {
	const { name, price, description, category } = req.body;

	if (!name || price === undefined || !description || !category) {
		return res.status(400).json({
			message: "name, price, description, and category are required"
		});
	}

	const product = {
		id: products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1,
		name,
		price: Number(price),
		description,
		category
	};

	if (!Number.isFinite(product.price) || product.price < 0) {
		return res.status(400).json({ message: "price must be a non-negative number" });
	}

	products.push(product);
	res.status(201).json(product);
});

app.put("/products/:id", (req, res) => {
	const productIndex = products.findIndex((item) => item.id === Number(req.params.id));

	if (productIndex === -1) {
		return res.status(404).json({ message: "Product not found" });
	}

	const { name, price, description, category } = req.body;

	if (!name || price === undefined || !description || !category) {
		return res.status(400).json({
			message: "name, price, description, and category are required"
		});
	}

	const updatedPrice = Number(price);
	if (!Number.isFinite(updatedPrice) || updatedPrice < 0) {
		return res.status(400).json({ message: "price must be a non-negative number" });
	}

	products[productIndex] = {
		id: products[productIndex].id,
		name,
		price: updatedPrice,
		description,
		category
	};

	res.json(products[productIndex]);
});

app.delete("/products/:id", (req, res) => {
	const productIndex = products.findIndex((item) => item.id === Number(req.params.id));

	if (productIndex === -1) {
		return res.status(404).json({ message: "Product not found" });
	}

	const [deletedProduct] = products.splice(productIndex, 1);
	res.json({ message: "Product deleted", product: deletedProduct });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${8000}`);
});
