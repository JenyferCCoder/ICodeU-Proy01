import express from 'express';
import fs from 'fs/promises';

const PORT = 8080;
const app = express();

// Trayendo los productos del JSON
const ruta = './productos.json'; // Ajusta la ruta según la ubicación real de tu archivo

const leerProductos = async () => {
    try {
        const data = await fs.readFile(ruta, 'utf-8');
        const productos = JSON.parse(data);
        return productos;
    } catch (error) {
        console.error("Error en lectura de productos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};

const products = await leerProductos();

// Referencia a un parámetro
app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid); // Convierte el parámetro a número

    if (!products || products.length === 0) {
        return res.status(500).send({ error: "No hay productos disponibles" });
    }

    const producto = products.find(prod => prod.id === productId);
    if (producto) {
        res.send(producto);
    } else {
        res.status(404).send({ error: "El producto no existe" });
    }
});

// Esto siempre va al final
app.use('/', (req, res) => {
    res.send("Server express");
});

app.listen(PORT, () => {
    console.log("Server on port:", PORT);
});
