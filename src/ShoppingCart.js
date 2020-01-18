class ShoppingCart {
    constructor() {
        this.itemsList = [];
    };
    getItems(){
        return this.itemsList;
    };
    addItem(itemName, quantity, price){
        return this.itemsList.push({name: itemName, quantity: quantity, pricePerUnit: price});
    };
    clear(){
        return this.itemsList = [];
    };
    itemCosts(){
        return this.itemsList.map((item) => item.quantity * item.pricePerUnit); // needed helperFunction
    };
    total(){
        return this.itemCosts().reduce((acc, currentItemCost) => {
            return acc + currentItemCost;
        }, 0);
    };
};

module.exports = ShoppingCart;  

/*
total(){
        itemCosts(){
            return this.itemsList.map((item) => item.quantity * item.pricePerUnit);
        };
        return this.itemCosts().reduce((acc, currentItem) => {
            return acc + currentItem;
        }, 0);
    }
*/