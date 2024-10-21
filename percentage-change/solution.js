function calculatePercentageChange(original, newAmount) {
  const difference = newAmount - original;
  /*if(difference==0)
    return 0;*/
  
  const percentageDifference = (difference / original) * 100;
  return Math.round(percentageDifference);
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(200, 200)); // should return -20 as there's been a 20% decrease from 50 to 40
