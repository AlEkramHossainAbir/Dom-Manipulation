//variables

let extramemorycost= document.getElementById('extraMemoryCost'); 
let extrastoragecost=document.getElementById('extraStorageCost');
let deliverycharge=document.getElementById('deliveryCharge');
let basePrice= document.getElementById('basePrice');
let value=0;


// Extra Memory Options

function totalPriceCalculaton(){

    let basePriceVal = parseInt(basePrice.innerText);
    let extramemorycostCVal = parseInt(extramemorycost.innerText);  
    let extrastoragecostVal = parseInt(extrastoragecost.innerText);
    let deliverychargeVal = parseInt(deliverycharge.innerText);

   // console.log(`e ${extramemorycostCVal} e ${extrastoragecostVal} e ${deliverychargeVal} e ${basePriceVal}`)
   
    value = basePriceVal + extramemorycostCVal + extrastoragecostVal + deliverychargeVal;

    document.getElementById('totalPrice').innerText = value;
    document.getElementById('totalCost').innerText = value;
}

document.getElementById('memoryFirstoption').addEventListener('click', function () {
    extramemorycost.innerText = 0; 
    totalPriceCalculaton();
})

document.getElementById('memorySecondOption').addEventListener('click', function () {
    extramemorycost.innerText = 180;
    totalPriceCalculaton();
})

// Extra Storage Options

document.getElementById('storageFirstOption').addEventListener('click', function () {
    extrastoragecost.innerText = 0;
    totalPriceCalculaton();
})

document.getElementById('storageSecondOption').addEventListener('click', function () {
    extrastoragecost.innerText = 100;
    totalPriceCalculaton();
})

document.getElementById('storageThirdOption').addEventListener('click', function () {
    extrastoragecost.innerText = 180;
    totalPriceCalculaton();
})

// Shipment Cost

document.getElementById('shipmentNormalCost').addEventListener('click', function () {
    deliverycharge.innerText = 0;
    totalPriceCalculaton();
})


document.getElementById('shipmentFastCost').addEventListener('click', function () {
    deliverycharge.innerText = 20;
    totalPriceCalculaton();
})



function promoAdd(){

    let promoText = document.getElementById('promoText');

    if(promoText.value=='stevekaku'){
        promoText.value="";
        value =value - (value *(20/100))
        document.getElementById('totalPrice').innerText = value;
    }
    else{
        console.log('Invalid Promo')
    }
}