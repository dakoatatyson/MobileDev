// Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. 
// The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think 
// will be necessary.
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.totalPrice = this.quantity * this.price;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("milk", 3, 3.99),
    new Grocery("bread", 6, 1.99),
    new Grocery("eggs", 11, 0.99)
];
function groceryList(groceries) {
    var groceryString;
    groceryString =
        "<table><tr><th>Name: </th><th>Quantity: </th><th>Price: </th><th>Total Price: </th></tr>";
    for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
        var grocery = groceries_1[_i];
        groceryString += ("<tr>" +
            "<td>" + grocery.name + "</td>" +
            "<td>" + grocery.price + "</td>" +
            "<td>" + grocery.quantity + "</td>" +
            "<td>" + grocery.totalPrice + "</td>" +
            "</tr>");
    }
    groceryString += "</table>";
    return groceryString;
}
document.body.innerHTML = groceryList(groceries);
