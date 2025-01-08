function howMuchILoveYou(nbPetals) {
    let responses = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
    ]
    return responses[(nbPetals - 1) % 6]
}
/*
Parameters:
nbPetals, the number of petals

Return Value:
a string, corresponding to the message based on the amount of petals

examples:
howMuchILoveYou(9) => 'a lot'
howMuchILoveYou(2) => 'a little'

make an array that associates the amount of petals with the message
get the message from the array using modulo to make it wrap
*/
