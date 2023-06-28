const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  
  const output = 'Hello, World!';
  
  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
  });
});
