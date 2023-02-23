//Author : Ridho Saputra

// Variable
const density =" .:-=+*#%@"
var text = '';

//Load Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Load Image
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./images.jpg";
img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
});

// START
window.onload = () => {

    // Accsess all pixel data using loop
    for (let y = 0; y < img.height; y++){
        for (let x = 0; x < img.width; x++){
            const pixel = ctx.getImageData(x,y,1,1)
            const data = pixel.data;
    
            // get the rgb value then find the average
            const avg = ( data[0] + data[1] + data[2] ) / 3;

            // map the avg value to ascii
            const len = density.length;
            const textIndex = Math.floor((avg * (len - 1)) / 255)
            console.log(textIndex)

            // put the ascii into the text variable
            if (density[textIndex] == ' '){
                text += '&nbsp;'
              }else{text += density[textIndex];
              } 
        }
        text += '<br>' // '\n' 
    }
    document.getElementById('p').innerHTML = text
}