function printTimesTable(n) {
  let i = 0;  
    for (let i = 1; i <= 12; i++) {
      console.log(`${i} x ${n} = ${i * n}`);
    }      
}

module.exports = { printTimesTable };
