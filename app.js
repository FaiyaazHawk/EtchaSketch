const container = document.getElementById('container')

//function to add divs to container

function makeGrid(length,width) {
    let i;
    //makes the divs based on length and width
 for(i=0; i <(length*width); i++) {
     let div = document.createElement('div');
     div.className = "grid";
     container.appendChild(div);
 }
 //adjusts the css style of container to fit divs in 800px by 800px
 container.style.gridTemplateColumns = `repeat(${width},${800/width}px)`;
 container.style.gridTemplateRows = `repeat(${length},${800/length}px)`;
 
}
 


makeGrid(16,16);

//Helper Functions//

///returns 3 RGB values (0-255) in an array
function randomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return [r,g,b]; 
}

