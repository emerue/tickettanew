const slidePage = document.querySelector(".slidepage")
var firstNextBtn = document.querySelector("#next-1")
var SecondNextBtn = document.querySelector("#next-2")
var thirdNextBtn = document.querySelector("#next-3")
var firstBackBtn = document.querySelector("#back-1")
var secondBackBtn = document.querySelector("#back-2")
var thirdBackBtn = document.querySelector("#back-3")
var progress = document.getElementById("progress")
var firstStep = document.querySelector(".step-1")
var secondStep = document.querySelector(".step-2")
var thirdStep = document.querySelector(".step-3")
var fourthStep = document.querySelector(".step-4")

firstNextBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    progress.style.width = "50%";

    $('body,html').animate({
        scrollTop: 100
    }, 1000);

})

SecondNextBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
    progress.style.width = "75%";

    $('body,html').animate({
        scrollTop: 100
    }, 2000);
})

thirdNextBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-75%";
    progress.style.width = "100%";

    $('body,html').animate({
        scrollTop: 100
    }, 2000);
})


firstBackBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "0%";
    progress.style.width = "25%";

    $('body,html').animate({
        scrollTop: 100
    }, 100);
})

secondBackBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    progress.style.width = "50%";

    $('body,html').animate({
        scrollTop: 100
    }, 100);
})

thirdBackBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
    progress.style.width = "75%";

    $('body,html').animate({
        scrollTop: 100
    }, 200);
})

firstStep.addEventListener("click", function () {
    slidePage.style.marginLeft = "0%";
    progress.style.width = "25%";

    $('body,html').animate({
        scrollTop: 100
    }, 100);
})

secondStep.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    progress.style.width = "50%";

    $('body,html').animate({
        scrollTop: 100
    }, 1000);;
})

thirdStep.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
    progress.style.width = "75%";

    $('body,html').animate({
        scrollTop: 100
    }, 2000);
})

fourthStep.addEventListener("click", function () {
    slidePage.style.marginLeft = "-75%";
    progress.style.width = "100%";

    $('body,html').animate({
        scrollTop: 100
    }, 2000);
})




//tags styling

var taginput = document.querySelector(".tagsinput")
var tagValue = taginput.value //value of the form input
var taglist = document.querySelector(".taglist")

addbtn = document.querySelector(".add")

addbtn.addEventListener("click", () => {
    if (taginput.value == "") {
        taginput.classList.add("tagred")
        return 0
    } else {
        taginput.classList.remove("tagred")
       createTag();
    }
    deleteTag()
})


var createTag = () =>{
    var tags = taginput.value.split(",");
    tags.forEach((tag, index) => {
        var li = document.createElement("li")
        var i = document.createElement("i")
        li.classList.add("tag_li")
        i.classList.add("fas")
        i.classList.add("fa-window-close")
        i.classList.add("delete_li")
        i.classList.add("mx-2")
        taglist.appendChild(li)
        li.textContent = tag
        li.insertAdjacentElement("beforeend", i);
    });
    taginput.value = null;
    tags = null;
}

var deleteTag = () => {
    deleteBtn = document.querySelectorAll(".delete_li")
        deleteBtn.forEach((del) => {
            del.addEventListener("click", function () {
            del.parentNode.remove()
            });
        });
}








