function timeToWalk(steps, footprint, speed) {
  const distanceKm = (steps * footprint) / 1000;
  const rest = Math.floor(distanceKm / 0.5);
  const time = (distanceKm * 60) / speed;
  const result = time + rest;

  //   const sec = parseInt(result, 10);
  let hour = Math.floor(result / 3600);
  let minutes = Math.floor((result - hour * 3600) / 60);
  let seconds = result - hour * 3600 - minutes * 60;

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hour + ":" + minutes + ":" + seconds;
}

console.log(timeToWalk(4000, 0.6, 5));
