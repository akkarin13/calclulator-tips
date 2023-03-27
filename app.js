const input_bill=document.querySelector('.input_bill');
const input_people=document.querySelector('.input_number');
const montant = document.querySelectorAll('.montant');
const tipss =document.querySelector(".tips_montant");
const a =document.querySelector('.a');
const b =document.querySelector('.b');
const c =document.querySelector('.c');
const d =document.querySelector('.d');
const e =document.querySelector('.e');
const price =document.querySelector(".price");
const input_number=document.querySelector('.input_number');
const priceTipsPeople =document.querySelector('.priceTipsPeople');
const priceTipsMontant=document.querySelector('.priceTipsMontant');
const reset =document.querySelector('.reset');
const input_custom =document.querySelector('.input_custom');



montant.forEach(element=>{
    element.addEventListener("click",()=>{
        let montantTips;
        let montantTipsPeople;
        if (element == a){
            console.log(a);
            montantTips=((input_bill.value*5)/100);
            console.log(montantTips);
            priceTipsPeople.innerText=("$"+montantTips);
    montantTipsPeople = montantTips/input_number.value;
    priceTipsMontant.innerText=("$"+montantTipsPeople);
    }
       else if (element == b){
        let montantTips;
        let montantTipsPeople;
            montantTips=((input_bill.value*10)/100);
            priceTipsPeople.innerText=("$"+montantTips);
    montantTipsPeople = montantTips/input_number.value;
    priceTipsMontant.innerText=("$"+montantTipsPeople);
    }
    else if (element == c){
        let montantTips;
        let montantTipsPeople;
        console.log(c);
        montantTips=((input_bill.value*15)/100);
        console.log(montantTips);
        priceTipsPeople.innerText=("$"+montantTips);
        montantTipsPeople = montantTips/input_number.value;
        priceTipsMontant.innerText=("$"+montantTipsPeople);
}
else if (element == d){
    let montantTips;
        let montantTipsPeople;
    console.log(d);
    montantTips=((input_bill.value*25)/100);
    priceTipsPeople.innerText=("$"+montantTips);
    montantTipsPeople = montantTips/input_number.value;
    priceTipsMontant.innerText=("$"+montantTipsPeople);
}
else if (element == e){
    let montantTips;
        let montantTipsPeople;
    console.log(e);
    montantTips=((input_bill.value*50)/100);
    priceTipsPeople.innerText=("$"+montantTips);
    montantTipsPeople = montantTips/input_number.value;
    priceTipsMontant.innerText=("$"+montantTipsPeople);
}

})});

    
reset.addEventListener('click',()=>{
    // let montantTips=00;
    // let montantTipsPeople=00;
    priceTipsPeople.innerText=("$"+"00.00");
    priceTipsMontant.innerText=("$"+"00.00");
});

