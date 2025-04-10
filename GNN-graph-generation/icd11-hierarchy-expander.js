// RUN THIS 4 times
const collapsedElements = document.querySelectorAll('.collapsed');
console.log('Number of collapsed elements:', collapsedElements.length);

let index = 0;

const expandElements = () => {
  if (index < collapsedElements.length) {
    console.log(`Expanding element ${index + 1}`);
    collapsedElements[index].click(); // or any other method to expand the element
    index++;
    
    // Introduce a delay after every 50 expansions for 5 seconds
    if (index % 25 === 0) {
      console.log('Waiting for 5 seconds...');
      clearInterval(interval);
      setTimeout(() => {
        // Restart the interval after 5 seconds
        interval = setInterval(expandElements, 250);
      }, 5000);
    }
  } else {
    clearInterval(interval); // Stop the interval once all elements are expanded
    console.log('Done'); // Print "Done" when the interval is cleared
  }
};

// Start the interval
let interval = setInterval(expandElements, 250);