// Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. 
// The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think 
// will be necessary.

// Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some quantities 
// (i.e. 3, 6, 11).  Display these grocery items as HTML output.

// The output of this assignment will be grocery.ts and groceries.html displaying the output.

interface Item{
    name: string;
    quantity: number;
    price: number;
}

class Grocery {
    totalPrice: number;

    constructor
    (
        public name: string, 
        public quantity: number,
        public price: number
    ) 
    {
        this.totalPrice = this.quantity * this.price;
    }
}

let groceries: Array<Grocery> = [
    new Grocery("milk",3,3.99),
    new Grocery("bread",6,1.99),
    new Grocery("eggs",11,0.99)];

function groceryList(groceries: Array<Grocery>) {
    let groceryString: string;

    groceryString = 
    "<table><tr><th>Name: </th><th>Quantity: </th><th>Price: </th><th>Total Price: </th></tr>"

    for(let grocery of groceries){
        groceryString += ("<tr>" + 
        "<td>" + grocery.name + "</td>" + 
        "<td>" + grocery.price + "</td>" + 
        "<td>" + grocery.quantity + "</td>" + 
        "<td>" + grocery.totalPrice + "</td>" + 
        "</tr>");
    }

    groceryString += "</table>"

    return groceryString;
}

document.body.innerHTML = groceryList(groceries);