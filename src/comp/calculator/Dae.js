  export const daeCalculator = (principal, startDateString, payments, guess) => {
    let values = [-1 * principal];
    let days = [1];
    let startDate = new Date(startDateString);
  
    Object.keys(payments).forEach(function (date) {
      values.push(payments[date]);
      days.push(1 + Math.ceil(Math.abs((new Date(date)).getTime() - startDate.getTime()) / (1000 * 3600 * 24)));
    });
  
    let fx = function (x) {
      let sum = 0;
  
      days.forEach(function (day, idx) {
        sum += values[idx] * Math.pow(1 + x, (days[0] - day) / 365);
      });
  
      return sum;
    };
  
    let fdx = function (x) {
      let sum = 0;
  
      days.forEach(function (day, idx) {
        sum += (1 / 365) * (days[0] - day) * values[idx] * Math.pow(1 + x, ((days[0] - day) / 365) - 1);
      });
  
      return sum;
    };
  
    return run(fx, fdx, guess);
  }

  const run = (fx, fdx, guess) => {
    let precision = 4;
    let errorLimit = Math.pow(10, -1 * precision);
    let previousValue = 0;

    do {
        guess = Number(guess);
        previousValue = Number(guess);
        guess = previousValue - (Number(fx(guess)) / Number(fdx(guess)));
    } while (Math.abs(guess - previousValue) > errorLimit);

    return guess;
    
  }
