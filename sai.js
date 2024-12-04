function createRateLimiter(limit, interval) {
    let calls = 0;
    let startTime = Date.now();

    return function() {
      const currentTime = Date.now();
      if (currentTime - startTime >= interval) {
        calls = 0;
        startTime = currentTime;
      }

      if (calls < limit) {
        calls++;
        return true;
      } else {
        return false;
      }
    };
  }

  const rateLimiter = createRateLimiter(3, 1000); // 3 calls per second
  console.log(rateLimiter()); // true
  console.log(rateLimiter()); // true
  console.log(rateLimiter()); // true
  console.log(rateLimiter()); // Should be false, but might be true
  