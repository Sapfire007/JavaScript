// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price*salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();
const product2 = new Product("Pants", 22.50);
product2.displayProduct();
const product3 = new Product("Coat", 100.00);
product3.displayProduct();

product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`)



// function Product(name, price){
//     this.name = name;
//     this.price = price;

//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     this.calculateTotal = function(salesTax){
//         return this.price + (this.price*salesTax);
//     }
// }

// const salesTax = 0.5;

// const product1 = new Product("Shirt", 19.59);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Coat", 100.00);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);