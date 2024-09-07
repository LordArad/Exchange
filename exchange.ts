function exchange(num: number, exchangeTo: string): number {
    if (exchangeTo === "usd") {
        return num / 594500;
    } else {
        return num * 594500;
    }
}
console.log(exchange(780000, "usd"));