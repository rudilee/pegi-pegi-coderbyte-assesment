function ModeMean(arr) {
    if (arr.length == 0) return 0;

    let trends = new Map();
    arr.forEach(el => {
        if (trends.has(el)) {
            trends.set(el, trends.get(el) + 1);
        } else {
            trends.set(el, 1);
        }
    });

    let sortedTrends = [...trends.entries()].sort(function (a, b) {
        if (a[1] < b[1]) return 1;
        if (a[1] > b[1]) return -1;
        return 0;
    });

    let mode = sortedTrends[0][0];
    let mean = arr.reduce((total, el) => total + el) / arr.length;

    return mode == mean ? 1 : 0;
}

console.log(ModeMean([1, 2, 3]));