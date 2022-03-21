package kata

import (
  "fmt"
  "math"
  )

func HarvesterRescue(data Data) string {
  
  result := "The spice must flow! Rescue the harvester!"
	
  fmt.Println(data)
  
  wormDistance := math.Sqrt(math.Pow(data.Harvester[0][0] - data.Worm[0][0], 2) + math.Pow(data.Harvester[0][1] - data.Worm[0][1], 2)) 
  
  carryallDistance := math.Sqrt(math.Pow(data.Harvester[0][0] - data.Carryall[0][0], 2) + math.Pow(data.Harvester[0][1] - data.Carryall[0][1], 2))
  
  wormTime := wormDistance / data.Worm[1]
  
  carryallTime := carryallDistance / data.Carryall[1]
  
  if wormTime < 1 + carryallTime {
    result = "Damn the spice! I'll rescue the miners!"
  }
  
  
  return result
}
