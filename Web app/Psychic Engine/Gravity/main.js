//createBy: Ridho Saputra

window.onload = function(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        w = width / 2,
        h = height / 2;

    var sun = vector.create(w, h),
        sunMass = 20000;

    var planet = vector.create(w + 200, h),
        planetVelocity = vector.create(0,0);

    var grav = vector.create(0,0);
        planetVelocity.setLength(10);
        planetVelocity.setAngle(-Math.PI / 2);


    // Everything happen here
    render()
    function render(){
        ctx.clearRect(0,0, width, height)

        //Get the distance between sun and planet
        var dx = sun.getX() - planet.getX(),
            dy = sun.getY() - planet.getY();
        var dist = Math.sqrt(dx * dx + dy * dy)
        
        //Set the length ang angle of grav vector
        grav.setLength(sunMass / (dist * dist))
        grav.setAngle(Math.atan2(dy,dx))
        
        //Update the planet velocity and planet posisition
        planetVelocity.addTo(grav)        
        planet.addTo(planetVelocity)
        
        //Create sun
        ctx.beginPath()
        ctx.fillStyle = "red";
        ctx.arc(sun.getX(), sun.getY(), 20, 0 , Math.PI * 2);
        ctx.fill()
        ctx.stroke()

        //Create Planet
        ctx.beginPath()
        ctx.fillStyle = "blue";
        ctx.arc(planet.getX(), planet.getY(), 10, 0 , Math.PI * 2);
        ctx.fill()
        ctx.stroke()
        
        //Make Animation
        requestAnimationFrame(render)

    }






}