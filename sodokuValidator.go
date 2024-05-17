package kata
import "fmt"

func ValidateSolution(m [][]int) bool {
  
    //initialize horizontal lines
    horizontalLine0 := []int{m[0]}
    horizontalLine1 := []int{m[1]}
    horizontalLine2 := []int{m[2]}
    horizontalLine3 := []int{m[3]}
    horizontalLine4 := []int{m[4]}
    horizontalLine5 := []int{m[5]}
    horizontalLine6 := []int{m[6]}
    horizontalLine7 := []int{m[7]}
    horizontalLine8 := []int{m[8]}
  
    //initalize vertical lines
    verticalLine0 := []int{m[0][0],[1][0],[2][0],[3][0],[4][0],[5][0],[6][0],[7][0],[8][0]}
    verticalLine1 := []int{m[0][1],[1][1],[2][1],[3][1],[4][1],[5][1],[6][1],[7][1],[8][1]}
    verticalLine2 := []int{m[0][2],[1][2],[2][2],[3][2],[4][2],[5][2],[6][2],[7][2],[8][2]}
    verticalLine3 := []int{m[0][3],[1][3],[2][3],[3][3],[4][3],[5][3],[6][3],[7][3],[8][3]}
    verticalLine4 := []int{m[0][4],[1][4],[2][4],[3][4],[4][4],[5][4],[6][4],[7][4],[8][4]}
    verticalLine5 := []int{m[0][5],[1][5],[2][5],[3][5],[4][5],[5][5],[6][5],[7][5],[8][5]}
    verticalLine6 := []int{m[0][6],[1][6],[2][6],[3][6],[4][6],[5][6],[6][6],[7][6],[8][6]}
    verticalLine7 := []int{m[0][7],[1][7],[2][7],[3][7],[4][7],[5][7],[6][7],[7][7],[8][7]}
    verticalLine8 := []int{m[0][8],[1][8],[2][8],[3][8],[4][8],[5][8],[6][8],[7][8],[8][8]}
    fmt.Println(m)
    fmt.Println(m[0])
    fmt.Println(m[0][0])
    fmt.Println(m[0][1])
    return false
}
