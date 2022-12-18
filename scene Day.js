function movieDay(timeForShooting, numScene, timeForOneScene) {
    let preparation = timeForShooting * 0.15;
    let timeOfScene = timeForOneScene * numScene + preparation;

    if (timeForShooting >= timeOfScene) {
        let leftTime = timeForShooting - timeOfScene;
        console.log(`You managed to finish the movie on time! You have ${Math.round(leftTime)} minutes left!`);
    } else {
        let needTime = timeOfScene - timeForShooting;
        console.log(`Time is up! To complete the movie you need ${Math.round(needTime)} minutes.`);
    }

}
movieDay(60, 15, 3)
