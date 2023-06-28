function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log('Start');

delay(2000)
  .then(() => {
    console.log('After 2 seconds');
    return delay(1000);
  })
  .then(() => {
    console.log('After another second');
    console.log('End');
  })
  .catch((err) => console.error(err));
