const currentTime = () => {
  let curTime = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = curTime;
}; // function to get the current time
currentTime(); // initial call

const intervalId = setInterval(() => {
  currentTime();
}, 1000); // update the clock every second

// setTimeout(() => clearInterval(intervalId), 5000); // stop the clock after 5 seconds