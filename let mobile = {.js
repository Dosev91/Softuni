let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9',
    batery: "9mAh",
    display: "Full HD"
};

for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
}