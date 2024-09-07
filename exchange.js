function Exchange(num, exchangeTo) {
    if (exchangeTo === "usd") {
        return num / 594500;
    }
    else {
        return num * 594500;
    }
}
console.log(Exchange(780000, "usd"));
