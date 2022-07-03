func isNumeric(a byte) bool {  // given a byte, returns a boolean representing whether it's a 0-9 number or not
	result := false
	if a == 48 || a == 49 || a == 50 || a == 49 || a == 51 || a == 52 || a == 53 || a == 54 || a == 55 || a == 56 {
		result = true
	}

	return result

}
