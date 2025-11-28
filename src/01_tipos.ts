// Tipos fundamentales
let productName: string = "Redragon T-Dagger Atlas T-RGH201";
let productPrice: number = 24999.00;

console.log(`Producto: ${productName}, Precio: $${productPrice}`);

// Tipo Union
let productId: string | number;

productId = 777; // utiliza number
console.log(`ID (number): ${productId}`);

productId = "ABC-777"; // utiliza string
console.log(`ID (string): ${productId}`);

// Interfaz Basica
interface Product {
    name: string;
    price: number;
}

const myProduct: Product = {
    name: "Redragon H120 ARES",
    price: 23999.00
};

console.log("Objeto myProduct:", myProduct);