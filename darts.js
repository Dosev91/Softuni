function solve(arr) {
    let namePlayer = arr[0];
    let startPoint = 301;
    let shots = 0;
    let unsuccessfulShots = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == "Retrie") {
            console.log(`${namePlayer} retired after ${unsuccessfulShots} unsuccessful shots.`);
        }
        if (i % 2 !== 0) {
            switch (arr[i]) {
                case "Triple":
                    if (startPoint - (arr[i + 1] * 3) >= 0) {
                        startPoint -= arr[i + 1] * 3;
                        shots++;
                        break;
                    } else {
                        unsuccessfulShots++;
                        break;
                    }
                case "Double":
                    if (startPoint - (arr[i + 1] * 2) >= 0) {
                        startPoint -= arr[i + 1] * 2;
                        shots++;
                        break;
                    } else {
                        unsuccessfulShots++;
                        break;
                    }
                case "Single":
                    if (startPoint - arr[i + 1] >= 0) {
                        startPoint -= arr[i + 1];
                        shots++;
                        break;
                    } else {
                        unsuccessfulShots++;
                        break;
                    }
            }

        }
        if (startPoint == 0) {
            console.log(`${namePlayer} won the leg with ${shots} shots."`);
            break;
        }
    }


}
solve(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retrie"

])
