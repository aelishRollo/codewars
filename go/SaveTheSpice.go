package kata

import (
  "fmt"
  "math"
  )

func HarvesterRescue(data Data) string {
  
  result := "The spice must flow! Rescue the harvester!"
	
  fmt.Println(data)
  
  wormDistance := math.Sqrt(math.Pow(float64(data.Harvester[0] - data.Worm[0]), 2) + math.Pow(float64(data.Harvester[0] - data.Worm[0]), 2)) 
  
  carryallDistance := math.Sqrt(math.Pow(float64(data.Harvester[0] - data.Carryall[0]), 2) + math.Pow(float64(data.Harvester[0] - data.Carryall[0]), 2))
  
  wormTime := wormDistance / float64(data.Worm[1])
  
  carryallTime := carryallDistance / float64(data.Carryall[1])
  
  if wormTime < 1 + carryallTime {
    result = "Damn the spice! I'll rescue the miners!"
  }
  
  
  return result
}
