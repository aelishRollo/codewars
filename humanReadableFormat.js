function formatDuration(seconds) {
    let [years, days, hours, minutes] = [0, 0, 0, 0];
    if (seconds === 0) {
      return 'now';
    }
  
    // Calculate years, days, hours, minutes, and seconds
    years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= (365 * 24 * 60 * 60);
  
    days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= (24 * 60 * 60);
  
    hours = Math.floor(seconds / (60 * 60));
    seconds %= (60 * 60);
  
    minutes = Math.floor(seconds / 60);
    seconds %= 60;
  
    // Prepare an array to store non-zero time units
    let result = [];
  
    if (years > 0) result.push(`${years} year${years > 1 ? 's' : ''}`);
    if (days > 0) result.push(`${days} day${days > 1 ? 's' : ''}`);
    if (hours > 0) result.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0) result.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    if (seconds > 0) result.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
  
    // Join the result with correct punctuation
    if (result.length === 1) {
      return result[0];
    } else if (result.length > 1) {
      return result.slice(0, -1).join(', ') + ' and ' + result.slice(-1);
    }
  }
  
  
  
  
  /*
  Parameters: seconds, which I believe is an integer
  
  Return Value: The amount of years, days, hours, and seconds that the alloted time is. If seconds === 0, return 'now'
  
  Example:
  
  * For seconds = 62, your function should return 
      "1 minute and 2 seconds"
  * For seconds = 3662, your function should return
      "1 hour, 1 minute and 2 seconds"
  
  
  Psuedocode:
  
  If seconds is 0, return 'now'
  If seconds > 60, figure out how many minutes it is
  If minutes > 60, figure out how many hours it is
  If hours > 24, figure out how many days it is 
  If days > 365, figure out how many years it is
  Return a correctly formatted time
  
  */
