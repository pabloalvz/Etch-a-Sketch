const container = document.querySelector("#container");
const scalebtn = document.querySelector("#sclbtn");
let scale = 16;
createGrid(scale);

scalebtn.addEventListener("click", () => {
    scale = parseInt(prompt("Choose a scale between 1 and 100"));
    while ((scale > 100) || (scale < 1)) {
        scale = parseInt(prompt("C'mon you can do it"));
    }
    createGrid(scale);
})

function createGrid(){
    
    container.innerHTML = "";

    for (i=0; i<scale; i++) {
        const col = document.createElement("div");
        col.classList.add("column");
        container.appendChild(col);
        for (x=0; x<scale; x++) {
            const row = document.createElement("div");
            row.classList.add("row");
            col.appendChild(row);
        }
    }

    let opac = 0;
    const rows = document.querySelectorAll(".row");
    if (opac <= 1) {
        rows.forEach(row => {
            row.addEventListener("mouseover", ()=> {
                var randomRGB = Math.floor(Math.random()*16777215).toString(16);
                var randomColor = "#" + randomRGB;
                var cols = document.querySelectorAll(".column");
                row.style.backgroundColor = randomColor;
                cols.forEach(col =>{
                col.style.opacity = String(opac);
                col.style.backgroundColor = "black";
                } )
                
                opac = opac + 0.02; 
            })
        })
    } else {}
}