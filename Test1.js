let restaurant1 = 124;
let restaurant2 = 48;
let restaurant3 = 268;

function tipCalculator(bill) {
    if(bill < 50) {
        return (bill = bill + (bill * 0.2));

} else if (bill >= 50 && bill < 200) {
        return (bill = bill + (bill * 0.15));

} else {
        return (bill = bill + (bill * 0.1));
    } 
}
console.log(tipCalculator(restaurant1, restaurant2, restaurant3)); //Generator