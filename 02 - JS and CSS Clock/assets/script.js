const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = currentTime.getMinutes();
  const minuteDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = currentTime.getHours();
  const hourDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // console.log(seconds, minutes, hours, hourDegrees);
}

setInterval(setDate, 1000);
