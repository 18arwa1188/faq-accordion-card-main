// Call Elemnts
let section = document.querySelectorAll("section");
let question = document.querySelectorAll("section > div");

question.forEach(function(ele){
    // Give All P Style So It works From First Click
    section.forEach((e) => e.children[1].style.display = "none");

    ele.addEventListener("click", function(){
        if (this.parentElement.children[1].style.display == "none") {
            // When Click To Show Ansewr, All Other Answrs Styles Disapear
            section.forEach(function(e){
                e.children[1].style.display = "none";
                e.children[0].children[0].style.fontWeight = "500";
                e.children[0].children[1].style.transform = "rotate(0deg)";
            })
            // Then Apply The Styles On The Clicked One
            this.parentElement.children[1].style.display = "block";
            this.children[0].style.fontWeight = "600";
            this.children[1].style.transform = "rotate(180deg)";
        }
        else {
            // To Hide The Answer
            this.parentElement.children[1].style.display = "none"
            this.children[0].style.fontWeight = "500";
            this.children[1].style.transform = "rotate(0deg)";
        }
    })
})