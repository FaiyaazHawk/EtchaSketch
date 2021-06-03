const container = document.getElementById('container')
const grid = document.getElementsByClassName('grid');


document.getElementById('button').addEventListener('click', function() {
    resetCol();
    setSize();
});


/////function to prompt message asking for grid size
function setSize() {
    let val = Number(prompt('Enter value between 1-50 to set grid (e.g. 16 = 16 by 16 grid)'));
    makeGrid(val,val);
    //adding hover eventListeners to grid divs
    for(let i = 0; i <grid.length; i++){
        grid[i].addEventListener('mouseover', function() {
            grid[i].style.backgroundColor = `${randomRGB()}`;
        })
    }
}


//function to add divs to container at specified size

function makeGrid(length,width) {
    if (length > 50 || width > 50) {
        alert('Choose a value 50 and under (due to performance issues)')
    } else {
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
    };
};


    //Helper Functions//

///returns value between 0-255
function randomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
///reset div background color
function resetCol() {
    for(let i = 0; i <grid.length; i++){
        grid[i].style.backgroundColor = `#d3d3d3`;
        }
    };


