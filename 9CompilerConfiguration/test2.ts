//working with multiple files:
interface Product {
    price: number,
    name: string,
    quantity: number
};

const printProduct = (product: Product): void => {
    console.log(`Product ${product.name} - ${product.price}`);
}