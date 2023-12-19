//used to calculate demarits and print message
function checkSpeed(speed) {
    // declare variables
    const speedLimit = 70;
    const demeritPointsPerIncrement = 5;
    const pointsThresholdForSuspension = 12;
//The input is checked if it is a number
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerIncrement);
      
      if (demeritPoints > pointsThresholdForSuspension) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  // Calculate demarits and output message
  checkSpeed();
  