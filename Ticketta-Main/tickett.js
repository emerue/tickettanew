
// for like button
$(".love i").addClass("fa-heart-broken")
$(".love i").removeClass("fa-heart")
// $(".love i").removeClass("fa")

$(".love i").click(function(){
        $(this).toggleClass("fa-heart-broken")
        // $(this).toggleClass("fa")
        $(this).toggleClass("fa-heart")
});



// for event page filters
$(".search-filter-item").click(function(){
        $(this).toggleClass("search-filter-item-hover");
})

//for index page filters
$(".filter-item").click(function(){
        $(this).toggleClass("search-filter-item-hover");
})

// eventpage filter button 
var filterbutton = document.querySelector(".filter-btn");

filterbutton.addEventListener("click", function () {
        document.querySelector("aside").classList.toggle("display");
        document.querySelector(".overlay").classList.toggle("display");
        document.querySelector(".theplace").classList.toggle("widths");
        document.querySelector("header").classList.toggle("widths");
       

        if(document.querySelector(".theplace").style.width = "100%"){
                document.querySelector(".searchbar").style.width = "100%";
        }else{
                document.querySelector(".searchbar").style.width = "80%"
        }
        
})

//close button
var closebutton = document.querySelector(".close-btn");

closebutton.addEventListener("click", function(){
        document.querySelector(".overlay").classList.toggle("display");
        document.querySelector("aside").classList.toggle("display");
        document.querySelector(".theplace").classList.toggle("widths");
        document.querySelector("header").classList.toggle("widths");
})





