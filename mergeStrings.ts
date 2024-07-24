export const mergeStrings = (first: string, second: string): string => {
    let longestMatchLength = 0;
  
    for (let i = 0; i < second.length; i++) {
      const startOfSecond = second.substring(0, i + 1);
      const endOfFirst = first.substring(first.length - (i + 1));
  
      if (startOfSecond === endOfFirst) {
        longestMatchLength = i + 1;
      }
    }
  
    return first + second.substring(longestMatchLength);
  }
