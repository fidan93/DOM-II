// Your code goes here
window.addEventListener('load', (event) => {
    alert('Welcome');
  });
let heading = document.querySelector(".main-navigation");
let imgs = document.querySelectorAll('img');
heading.addEventListener("mouseover",(event) => {
heading.style.backgroundColor = "Beige";
heading.style.transition = ".3s"
})
heading.addEventListener("mouseout",(event)=>{
    heading.style.backgroundColor = "initial";
})

Array.from(document.links).forEach(link => {
    link.addEventListener("mouseover",()=>{
        link.style.color = "grey";
        link.style.transform = "scale(1.2)"
    })
    link.addEventListener("mouseout",()=>{
        link.style = "initial";
        
    })
})
//2

imgs.forEach( img1 => {
    img1.addEventListener("click",() => {
    img1.style.borderRadius = "100%"
});
img1.addEventListener("mouseout",() => {
    img1.style = "initial";
})
})

let p = document.querySelectorAll('p');

// p.forEach(word => {
//     word.addEventListener("select",(event) => {
//         const selected = event.target.innerText.substring(event.target.selectionStart,event.target.selectionEnd);
//         alert(`You selected: ${selected}`);
//         })
// })
function logSelection(event) {
    
    const selection = event.target.innerText.substring(event.target.selectionStart, event.target.selectionEnd);
    alert( `You selected: ${selection}`);
  }

  const log = document.getElementsByClassName('text-content');