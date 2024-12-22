import fs from 'fs/promises'
import crypto from "crypto"
const ruta = 'productos.json'

const leerProductos = async () => {
    try {
        const data = await fs.readFile(ruta, 'utf-8')
        console.log(data);
        const productos = JSON.parse(data)
        return productos
    }catch(error) {
        console.log("Error en lectura de productos", error)

    }
}

const agregarProducto = async (nuevoProducto) => {
    try {
        const prods = await leerProductos()
        prods.push(nuevoProducto)
        await fs.writeFile(ruta, JSON.stringify(prods))
        console.log("Producto almacenado");
    }catch(error) {
        console.log("Error al agregar productos", error)

    }
}

const newProduct = {
    id: 3,
    title: "Polo Angular",
    description: "Polo algodón pima",
    code:"polo003",
    price: 50,
    stock: 110,
    category:"polos",
    thumbnails: ['images/img1.png','images/img2.jpg'],
    status: true
}

agregarProducto(newProduct)

 