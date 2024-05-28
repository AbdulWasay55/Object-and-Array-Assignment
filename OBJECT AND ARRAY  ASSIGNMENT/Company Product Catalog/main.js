// ARRAY OF INVENTORY 
var inventory = [];
// OBJECT OF PRODUCT 1
var product1 = {
    name: "T-shirt",
    model: "WG-45",
    cost: 1000,
    quantity: 400
};
// OBJECT OF PRODUCT 2
var product2 = {
    name: "Jeans",
    model: "WBL-65",
    cost: 2000,
    quantity: 300
};
// OBJECT OF PRODUCT 3
var product3 = {
    name: "Shirt",
    model: "AWD-67",
    cost: 1500,
    quantity: 200
};
// ADDING PRODUCT OBJECT IN ARRAY OF INVENTORY
inventory.push(product1, product2, product3);
// ACCESS THE THIRD PRODUCT PROPERTY QUANTITY FROM INVENTORY ARRAY
console.log(inventory[2].quantity);
var product4 = {
    name: "Sneakers",
    model: "DWE-64",
    cost: 2500,
    quantity: 100
};
// ADDING 1 MORE PRODUCT TO INVENTORY ARRAY
inventory.push(product4);
console.log(inventory);
