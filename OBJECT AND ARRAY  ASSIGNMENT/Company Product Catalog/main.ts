// TYPE OF PRODUCT
type Product = {
    name:string;
    model:string;
    cost:number;
    quantity:number
};
// ARRAY OF INVENTORY 
let inventory = [] as Product[];
// OBJECT OF PRODUCT 1
let product1:Product ={
    name:"T-shirt",
    model:"WG-45",
    cost:1000,
    quantity:400
};
// OBJECT OF PRODUCT 2
let product2:Product ={
    name:"Jeans",
    model:"WBL-65",
    cost:2000,
    quantity:300
};
// OBJECT OF PRODUCT 3
let product3:Product ={
    name:"Shirt",
    model:"AWD-67",
    cost:1500,
    quantity:200
};
// ADDING PRODUCT OBJECT IN ARRAY OF INVENTORY
inventory.push(product1,product2,product3);
// ACCESS THE THIRD PRODUCT PROPERTY QUANTITY FROM INVENTORY ARRAY
console.log(inventory[2].quantity);
let product4:Product ={
    name:"Sneakers",
    model:"DWE-64",
    cost:2500,
    quantity:100
};
// ADDING 1 MORE PRODUCT TO INVENTORY ARRAY
inventory.push(product4)
console.log(inventory);

