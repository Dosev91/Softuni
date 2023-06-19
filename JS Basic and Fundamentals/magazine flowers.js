function slove(input) {
    let hrizantemi = Number(input[0]);
    let rose = Number(input[1]);
    let laleta = Number(input[2]);
    let sesson = input[3];
    let whatDay = input[4];
    let priceHrizantemi = 0;
    let priceRose = 0;
    let priceLaleta = 0;
    let sum = 0;
    let totalFlowers = rose + laleta + hrizantemi;

    if (sesson == "Spring" || sesson == "Summer") {
        priceHrizantemi = hrizantemi * 2;
        priceRose = rose * 4.10;
        priceLaleta = laleta * 2.50;
        sum = priceHrizantemi + priceRose + priceLaleta;
    } else if (sesson == "Autumn" || sesson == "Winter") {
        priceHrizantemi = hrizantemi * 3.75;
        priceRose = rose * 4.50;
        priceLaleta = laleta * 4.15;
        sum = priceHrizantemi + priceRose + priceLaleta;
    }
    if (whatDay == "Y") {
        sum = sum + (sum * 0.15);
    } else {
        sum = sum;
    }
    if (laleta > 7 && sesson == "Spring") {
        sum = sum - (sum * 0.05);
    } else if (rose >= 10 && sesson == "Winter") {
        sum = sum - (sum * 0.1);
    }
    if (totalFlowers > 20) {
        sum = sum - (sum * 0.2);
    }

    console.log((sum + 2).toFixed(2));

} 
slove(["3", "10", "9", "Winter", "N"])

