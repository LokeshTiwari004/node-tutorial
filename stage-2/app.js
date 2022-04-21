let count = 0; 
process.nextTick(() => {
  console.log(3);
})
function h () {
  for (let i = 0; i < 1000000000; i++) {
    count++;
  }

  setTimeout(() => {
    console.log(4);
  }, 1000)
  console.log(1);
}
h();
console.log(2);