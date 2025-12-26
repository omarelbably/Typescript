let purchaseSum = 2500;
let discount = 200;
let priceAfterDiscount;

if(purchaseSum >= 1000){
    priceAfterDiscount = purchaseSum - (discount/2);
    console.log(`You will need to pay ${priceAfterDiscount}EGP`);
}else if(purchaseSum > 2000){
    priceAfterDiscount = purchaseSum - discount;
    console.log(`You will need to pay ${priceAfterDiscount}EGP`);
}
else{
    console.log("You don't have any discount");
}

