// let para1 = document.createElement('p');
// para1.innerText = "hey I am para1";
// document.querySelector('body').append(para1);
// para1.classList.add("red");

// let h3 = document.createElement('h3');
// h3.innerText = "I'm a blue h3";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector('body').append(div);

//   
// btn.onclick = function(){
//     console.log("button was clicked"); 
// }

// btn.onmouseenter = function(){
//     console.log("you entered");
// }

// function sayhello(){
//     alert("hello!");
// }

// btn.onclick = sayhello;


let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let h3 = document.querySelector('h3');
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
     let div = document.querySelector('div');
     div.style.backgroundColor = randomColor;
    console.log("color update");
}) 

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green},${blue})`;
    return color;
}


