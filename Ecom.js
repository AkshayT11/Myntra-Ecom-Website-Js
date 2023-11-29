let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");
let bar = document.querySelector("#bar");
const ul = document.querySelector("ul");
let count = 0;

slide.forEach(function(slides, index){
    slides.style.left = `${index * 100}%`;

})

function myFun(){
     slide.forEach(function(curVal){
         curVal.style.transform = `translateX(-${count * 100}%)` 
     })
}

setInterval(()=> {
    count++;
    myFun();
    if(count === slide.length){
        count = 0;
        // myFun();

    }
},2000)

// Responsive Menu Bar
 bar.addEventListener("click", ()=> {
     ul.classList.toggle("menu_active");

    let bar_child = bar.firstElementChild;
    if(ul.classList.contains("menu_active")){
        bar_child.classList.replace("fa-bars","fa-xmark");
    } 
     else{
        bar_child.classList.replace("fa-xmark","fa-bars");
     }


 } )



//Card Details

card.forEach((cards)=> {
    cards.addEventListener("click", () => {
        console.log(cards.firstElementChild.src);
        // To vanish the all page and only can see card
        document.querySelector(".container").style.display="none";

        let div =  document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
        <img src= ${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>Top Trending Wear</h2>
            <h2>Upto 30% Off Hurry Up...</h2>
            <p>Clothing is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials </p>
            <p>Clothing is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials </p>
            <p>Clothing is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials </p>
            <p>Clothing is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials </p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>
        `
        // to append this div into body 
        document.querySelector("body").appendChild(div);

    })
} )














