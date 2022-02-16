var add_ticket = document.querySelector(".add_ticket")
var free_ticket = document.querySelector(".free_ticket")
var promo_code = document.querySelector(".promo_code")

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".bg-modal").style.display = "none";
});

add_ticket.addEventListener("click", function(){
    document.querySelector(".bg-modal").style.display = "block";
});

var done = document.querySelector(".done");
var ticket_name = document.querySelector(".ticketname");
var ticket_price = document.querySelector(".ticketprice");
var quantity = document.querySelector(".quantity");
var sales_start = document.querySelector(".salestart");
var start_time = document.querySelector(".start_time");
var sales_end = document.querySelector(".salesend");
var end_time = document.querySelector(".end_time");
var price_type = document.querySelector(".pricetype_header p");
var price_space = document.querySelector(".price_space");
var quantity_space = document.querySelector(".quantity_space");
var sales_start_date = document.querySelector(".sales_start_date");
var sales_end_date = document.querySelector(".sales_end_date");
var starttime_space = document.querySelector(".starttime_space");
var endtime_space = document.querySelector(".endtime_space");

var pricetype = document.querySelector(".pricetype");
var ticketpricing = document.querySelector(".ticketpricing");
var arr = []
function createPriceType(){

    pricetype = document.createElement("div");
    pricetype.classList.add("pricetype");
    ticketpricing.appendChild(pricetype);
    
    var pricetypeheader = document.querySelector(".pricetype_header");
    pricetypeheader = document.createElement("div");
    pricetypeheader.classList.add("pricetype_header");
    price_type = document.createElement("p");
    pricetype.appendChild(pricetypeheader);
    pricetypeheader.appendChild(price_type);
    
    var pricetypecontent = document.querySelector(".pricetype-content");
    pricetypecontent = document.createElement("div");
    pricetypecontent.classList.add("pricetype-content");
    pricetype.appendChild(pricetypecontent);

    var lab1 = document.createElement("label");
    pricetypecontent.appendChild(lab1);
    lab1.innerHTML = "Price:"

    price_space = document.createElement("p");
    price_space.classList.add("price_space");
    pricetypecontent.appendChild(price_space);

    var lab2 = document.createElement("label");
    lab2.classList.add("pt-2")
    pricetypecontent.appendChild(lab2);
    lab2.innerHTML = "Quantity:"

    quantity_space = document.createElement("p");
    quantity_space.classList.add("quantity_space");
    pricetypecontent.appendChild(quantity_space);
    
    var salesinfo = document.querySelector(".salesinfo");
    salesinfo = document.createElement("div");
    salesinfo.classList.add("salesinfo");
    pricetype.appendChild(salesinfo);

    p = document.querySelector(".salesinfo p")
    p = document.createElement("p");
    salesinfo.appendChild(p);

    sales_start_date = document.createElement("i");
    sales_start_date.classList.add("sales_start_date");
    starttime_space = document.createElement("i");
    starttime_space.classList.add("starttime_space")
    p.append("sales starts ") + p.append(sales_start_date) + p.append(" at ") + p.append(starttime_space);
    var br = document.createElement("br")
    p.append(br)
    p2 = document.querySelector(".salesinfo p")
    p2 = document.createElement("p");
    salesinfo.appendChild(p2);
    sales_end_date = document.createElement("i");
    sales_end_date.classList.add("sales_end_date");
    endtime_space = document.createElement("i");
    endtime_space.classList.add("endtime_space");
    p.append("sales ends ") + p.append(sales_end_date) + p.append(" at ") + p.append(endtime_space);

   
    
    trash = document.createElement("div");
    trash.classList.add("trash");
    pricetype.appendChild(trash);
    var del = document.createElement("span");
    del.classList.add("fa");
    del.classList.add("fa-trash");
    del.classList.add("kill");
    var edit = document.createElement("span")
    edit.classList.add("fa")
    edit.classList.add("fa-pen")
    edit.classList.add("mr-3")
    edit.classList.add("edit");
    trash.appendChild(edit);
    trash.appendChild(del);
    // $(".trash").append('<span class="fa fa-trash"></span>');
    
    kill = document.querySelectorAll(".kill")
   edit = document.querySelectorAll(".edit")
}

function setValues(){
    price_type.textContent = ticket_name.value;
    price_space.textContent = ticket_price.value;
    quantity_space.textContent = quantity.value;
    sales_start_date.textContent = sales_start.value;
    starttime_space.textContent = start_time.value;
    sales_end_date.textContent = sales_end.value;
    endtime_space.textContent = end_time.value;
}

function clearValues(){
    ticket_name.value = " ";
    ticket_price.value = null;
    quantity.value = null;
    sales_start.value = null;
    sales_end.value = null;
    start_time.value = null;
    end_time.value = null;
}




done.addEventListener("click", function(){
    createPriceType();
    setValues();
    // arr.push(pricetype);
    document.querySelector(".bg-modal").style.display = "none";
    clearValues();
       
    // arr.forEach((arr) =>{
    //     var remove = arr.lastElementChild.firstElementChild;

    //    del.addEventListener("click", ()=>{  
    //     console.log(del.parentNode)
    //    })
    // })
     
});



     