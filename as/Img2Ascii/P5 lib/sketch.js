let img;
const density =" .:-=+*#%@"

function preload(){
  img = loadImage('./images.jpg')
}

function setup() {
  createCanvas(400, 400);

let row = ''


 // image(img, 0,0, )
 background(0)

  let w = width / img.width;
  let h = height / img.height;
  img.loadPixels();
  for (y = 0; y < img.height; y++) {
    row += '<br>'
    for (x = 0; x < img.width; x++) {
      const pixelIndex = (x + y * img.width) * 4;
      const red = img.pixels[pixelIndex + 0]
      const green = img.pixels[pixelIndex + 1]
      const blue = img.pixels[pixelIndex + 2]
      const avg = (red + blue + green) / 3;
      stroke(0);
      fill(avg)

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len))
     // square(x * w, y * h, w);
     textSize(w)
     textAlign(CENTER, CENTER)
     text(density.charAt(charIndex), x * w + w * 0.5, y * h + h * 0.5)
     
     const c = density.charAt(charIndex);

     if (c == ' '){
      row += '&nbsp;'
    }else{row += c;} 
    }

  }
  document.getElementById('myId').innerHTML = row;

}

