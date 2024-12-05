function ipToInt32(ip) {
    let nums = ip.split('.').map(Number);
    return ((nums[0] << 24) | (nums[1] << 16) | (nums[2] << 8) | nums[3]) >>> 0;
  }
  