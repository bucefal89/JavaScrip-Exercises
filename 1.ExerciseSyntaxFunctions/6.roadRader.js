function speedLimit(speed, area) {
  const areaes = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  if (area in areaes) {
    if (speed <= areaes[area]) {
      let speedLimit = areaes[area];
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      let difference = speed - areaes[area];
      if (speed <= areaes[area] + 20) {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${areaes[area]} - speeding`
        );
      } else if (speed <= areaes[area] + 40) {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${areaes[area]} - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${areaes[area]} - reckless driving`
        );
      }
    }
  }
}

speedLimit(40, "city");
speedLimit(21, "residential");
speedLimit(120, "interstate");
speedLimit(200, "motorway");
