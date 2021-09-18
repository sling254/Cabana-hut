


class CreteOrder{
    constructor(quantity,size,topping,crust,deliverynote){
        this.quantity = quantity;
        this.size = size;
        this.topping = topping;
        this.crust = crust;
        this.deliverynote = deliverynote;
    }
}

class UI{
    getPrice(order){
        let price = 0;
        let quantity = parseInt(order.quantity);
        let toppings = order.topping
        let crust =order.crust;
        console.log(crust);
       function checkCrust(){
        if (order.crust === "crispy"){
            price +=250;
        }
        if (order.crust === "glutenfree"){
            price +=300;
        }
        if (order.crust==="stufedcrust") {
            price +=400;
        }

       }
       function deliveryNote(){
           if (order.deliverynote === "no"){
               price
           }else{
               price +=250;
           }
       }
       
        if (order.size === "small" ){
            price = quantity*700 ;
            checkCrust()
            deliveryNote()          
            if (toppings.includes("pineapple")){
                price +=250;
            }
            if (toppings.includes("beef")){
                price +=300;
            }
            if (toppings.includes("pork")){
                price +=350;
            }
        }
        else if (order.size === "medium"){
            price = quantity*1000 ;
            checkCrust()
            deliveryNote() 
            if (toppings.includes("pineapple")){
                price +=350;
            }
            if (toppings.includes("beef")){
                price +=350;
            }
            if (toppings.includes("pork")){
                price +=450;
            }
        
        }
        else if (order.size === "large"){
            price = quantity*2000;
            checkCrust()
            deliveryNote() 
            if (toppings.includes("pineapple")){
                price +=400;
            }
            if (toppings.includes("beef")){
                price +=400;
            }
            if (toppings.includes("pork")){
                price +=500;
            }        
        }
       
        console.log("ycbdhc"+price);

        return price;
        
        

    }

    displayPrice(a){
        $("#gluttenprice").text(`Ksh.${a}`)

    }
    displaySummary(order,displayPrice){
        const summaryCheckout = $(".summary-checkout")
        const div = document.createElement("div");
        div.innerHTML=`
        <h5> Crust:- ${order.crust}</h5>
        <h5>Quantity:- ${order.quantity}</h5>
        <h5>Size:- ${order.size}</h5>
        <h5>Toppings:- ${order.topping}</h5>
        <h5>Delivery @:- kigali</h5>
        <h1>TOTAL PRICE:- ${displayPrice} </h1>
        `
        summaryCheckout.append(div);  

    }
}
//instanciate the Ui class
const ui = new UI();


function peporoniOrder(){
    peporoniQuantity = $("#glutenfree-quantity").val();
    glutenFreeSize = $("#glutenfree-size").val();
    crust = $("#crust").val();
    delivery = $("#delivery").val();    
    console.log("this is the delivery"+ delivery);
    var toppings = [];
    $.each($("input[name='peporoni']:checked"), function(){
        toppings.push($(this).val());
    });
    console.log(toppings);
    //instanciate
    const peporoniOrder = new CreteOrder(peporoniQuantity,glutenFreeSize,toppings,crust,delivery);    
    console.log(peporoniOrder);
    ui.getPrice(peporoniOrder);    
    displayPrice =ui.getPrice(peporoniOrder);
    ui.displayPrice(displayPrice);
    ui.displaySummary(peporoniOrder,displayPrice)
}


//add event listener
$(".peporoni-btn").click(peporoniOrder);
