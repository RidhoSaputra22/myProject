addEventListener("keydown", function(event){
    if (event.code == 'KeyD') vx = 2.4;
    if (event.code == 'KeyA') vx = -2.4
})

addEventListener('keyup', function(event){
    if (event.code == 'KeyD') vx = 0;
    if (event.code == 'KeyA') vx = 0;

})