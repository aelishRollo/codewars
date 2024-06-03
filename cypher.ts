const cipher: { [key: string]: string } = {
    'g': 'a', 'a': 'g', 'd': 'e', 'e': 'd',
    'r': 'y', 'y': 'r', 'p': 'o', 'o': 'p',
    'l': 'u', 'u': 'l', 'k': 'i', 'i': 'k',
    'G': 'A', 'A': 'G', 'D': 'E', 'E': 'D',
    'R': 'Y', 'Y': 'R', 'P': 'O', 'O': 'P',
    'L': 'U', 'U': 'L', 'K': 'I', 'I': 'K'
  };
  
  function transform(str: string): string {
    return str.split('').map((letter: string) => cipher[letter] || letter).join('');
  }
  
  export function encode(str: string): string {
    return transform(str);
  }
  
  export function decode(str: string): string {
    return transform(str);
  }
