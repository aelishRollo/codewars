export class Kata {

    static isVowel(letter: string): boolean {
        return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
    }

    static disemvowel(str: string): string {
        return str.split('').filter((letter) => !Kata.isVowel(letter)).join('');
    }
}

//Parameters: a string

//Return: the same string but with no vowels

//Example: "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

//Psuedocode:

// iterate through str , if the current letter is not a,e,i,o,u then add it to the result array
