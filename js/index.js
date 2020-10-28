// Your code goes here
//load 1
window.addEventListener('load', (event) => {
    alert('Welcome');
  });
  //mouseover 2
let heading = document.querySelector(".main-navigation");
let imgs = document.querySelectorAll('img');
heading.addEventListener("mouseover",(event) => {
heading.style.backgroundColor = "Beige";
heading.style.transition = ".3s"
})
//mouseout 3
heading.addEventListener("mouseout",(event)=>{
    heading.style.backgroundColor = "initial";
})
//mouseenter 4
Array.from(document.links).forEach(link => {
    link.addEventListener("mouseenter",(event)=>{
        link.style.color = "grey";
        link.style.transform = "scale(1.2)";
        event.preventDefault();
    })
    //mouseleave 5
    link.addEventListener("mouseleave",(event)=>{
        link.style = "initial";
        event.preventDefault();
    })

})

//click 6
imgs.forEach( img1 => {
    img1.addEventListener("click",() => {
    img1.style.borderRadius = "100%"
});
img1.addEventListener("mouseout",() => {
    img1.style = "initial";
})
})
//keydown 7
let h = document.querySelectorAll("h2");
h.forEach(hs => {
    document.addEventListener("keydown",() => {
hs.style.color = "red";
    })
    //keyup 8
   document.addEventListener("keyup",() => {
        hs.style.color = "initial";
            })
})

let butt = document.querySelectorAll(".btn");

let but2 = document.querySelector(".destination:nth-of-type(2) .btn");
console.log(but2);
butt.forEach(btn => {
    btn.addEventListener("mouseover", (event) => {
        event.target.textContent = "Click me";
        
}),btn.addEventListener("mouseleave",(event)=>{
    event.target.textContent = 'Sign me up!';
    
});
});

but2.addEventListener("mouseover", (event) => {
    
    event.target.style.backgroundColor = "orange";
    event.stopPropagation();
})
