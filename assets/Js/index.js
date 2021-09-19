class CreteOrder{
    constructor(quantity,size,topping,crust,deliverynote,delivarylocation){
        this.quantity = quantity;
        this.size = size;
        this.topping = topping;
        this.crust = crust;
        this.deliverynote = deliverynote;
        this.delivarylocation =delivarylocation;
    }
}
class UI{
    handleLoctionToggle() {
        $(".location-toggle").change(function(e){
            let toDelivery = $(this).val();
            if(toDelivery == "yes"){
                $(this).parent().siblings().removeClass("d-none")         
                
            }
            else{
                $(this).parent().siblings().addClass("d-none")
            }
        })
    }
    getPrice(order){
        let price = 0;
        let quantity = parseInt(order.quantity);
        let toppings = order.topping;
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
        return price;

    }

    
    displaySummary(order,displayPrice){
        const summaryCheckout = $(".summary-checkout")
        const div = document.createElement("div");        
        div.innerHTML=`
        <h5> Crust:- ${order.crust}</h5>
        <h5>Quantity:- ${order.quantity}</h5>
        <h5>Size:- ${order.size}</h5>
        <h5>Toppings:- ${order.topping}</h5>
        <h5>Delivery @:- ${order.delivarylocation}</h5>
        <h1>TOTAL PRICE:- ${displayPrice} </h1>
        `
        summaryCheckout.append(div);  

    }
}
//instanciate the Ui class
const ui = new UI();

$(document).ready(function() {
    ui.handleLoctionToggle();

    function peporoniOrder(e){
        e.preventDefault();
        peporoniQuantity = $("#glutenfree-quantity").val();
        glutenFreeSize = $("#glutenfree-size").val();
        crust = $("#crust").val();
        delivery = $("#delivery").val();
        delivarylocation =$("#delivarylocation").val();
        var toppings = [];
        $.each($("input[name='peporoni']:checked"), function(){
            toppings.push($(this).val());
        });
        //instanciate
        const peporoniOrder = new CreteOrder(peporoniQuantity,glutenFreeSize,toppings,crust,delivery,delivarylocation);
        ui.getPrice(peporoniOrder);    
        displayPrice =ui.getPrice(peporoniOrder);
        
        ui.displaySummary(peporoniOrder,displayPrice)
        }

        /* Indian Order */
    function indianOrder(){
        indianQuantity=$("#indian-quantity").val();
        indianSize = $("#indian-size").val();
        Crust = $("#indian-crust").val();
        delivery = $("#delivery-indian").val();
        delivarylocation =$("#delivarylocation-indian").val();
        var toppings = [];
        $.each($("input[name='indian']:checked"), function(){
            toppings.push($(this).val());
        });
        const indianOrder = new CreteOrder(indianQuantity,indianSize,toppings,Crust,delivery,delivarylocation);    
        ui.getPrice(indianOrder);    
        displayPrice =ui.getPrice(indianOrder);
        ui.displaySummary(indianOrder,displayPrice)

    }

        /* Hawaiia Order */
    function hawaiianOrder(e) {
        e.preventDefault();
        hawaiiaQuantity=$("#hawaiia-quantity").val();
        hawaiiaSize = $("#hawaiia-size").val();
        Crust = $("#hawaiia-crust").val();
        delivery = $("#delivery-hawaiia").val();
        delivarylocation =$("#delivarylocation-hawaii").val();    
        var toppings = [];
        $.each($("input[name='hawaiia']:checked"), function(){
            toppings.push($(this).val());
        });
        const hawaiianOrder = new CreteOrder(hawaiiaQuantity,hawaiiaSize,toppings,Crust,delivery,delivarylocation);    
        ui.getPrice(hawaiianOrder);    
        displayPrice =ui.getPrice(hawaiianOrder);
        ui.displaySummary(hawaiianOrder,displayPrice)
        
    }
    //add event listener
    $("#form-1").submit(peporoniOrder);
    $(".btn-Indian").click(indianOrder);
    $("#form-2").submit(hawaiianOrder);
    /* refresh page */
    $("#close-summary").click(function() {
        location.reload();
    });


});