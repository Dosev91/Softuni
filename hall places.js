function slove(input) {
    const i = Number(input[0]);
    const w = Number(input[1]);
    let numPlacesRow = i / 1.20;
    let numPlacesCol = (w - 1) / 0.7;
    numPlacesRow = Math.floor(numPlacesRow);
    numPlacesCol = Math.floor(numPlacesCol);
    let totalPlaces = numPlacesCol * numPlacesRow - 3;

    console.log(totalPlaces);
}
slove(["8.4", "5.2"])
