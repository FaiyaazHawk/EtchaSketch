const container = document.getElementById('container')
const grid = document.getElementsByClassName('grid');
//function to add divs to container at specified size

function makeGrid(length,width) {
    let i;
    //makes the divs based on length and width
 for(i=0; i <(length*width); i++) {
     let div = document.createElement('div');
     div.className = 'grid';
     container.appendChild(div);
 }
 //adjusts the css style of container to fit divs in 800px by 800px
 container.style.gridTemplateColumns = `repeat(${width},${800/width}px)`;
 container.style.gridTemplateRows = `repeat(${length},${800/length}px)`;
 
}
 makeGrid(50,50);
 

//adding hover eventListeners to grid divs

for(let i = 0; i <grid.length; i++){
    grid[i].addEventListener('mouseover', function() {
        let color = randomRGB;
        grid[i].style.backgroundColor = `${randomRGB()}`;
    })
}



//Helper Functions//

///returns value between 0-255
function randomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

