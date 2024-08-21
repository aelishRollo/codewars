function pointsNumber(radius){
    let totalPoints = 0
    for (let x = -radius; x <= radius; x++) {
       for (let y = -radius; y <= radius; y++) {
         if ((x*x + y*y) <= radius*radius) {
           totalPoints++
         }
       }
     }
    return totalPoints
  }
  
  /*
  Parameters: a whole number, the radius
  
  Return Value: A whole number, the amount of points in/on the circle that are integers
  
  Example: for radius = 2, the points are (0,2) (2,0) (0,-2) (-2,0) (-1,1) (0,1) (1,1) (1,0) (1,-1) (0,-1) 
  (-1,-1) one other point, and the origin. So the return value should be 13
  
  Psuedocode:
  
  First I tried to come up with a mathematical formula for all points, but I'm actually just going to treat this
  like an integral
  
  */
