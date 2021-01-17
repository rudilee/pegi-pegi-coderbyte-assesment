function BitmapHoles(strArr) {
    let matrix = strArr.map(el => el.split(""));
    let holePatchs = [];
    let singleCluster = [];
    let multiCluster = [];

    for (let x = 0; x < matrix[0].length; x++) {
        for (let y = 0; y < matrix.length; y++) {
            if (matrix[y][x] == 0) {
                let linkedNeighbours = findLinkedNeighbours(x, y, matrix);
                if (linkedNeighbours.length == 0) singleCluster.push([`${x}${y}`]);
                else linkedNeighbours.push(`${x}${y}`);

                holePatchs.push(linkedNeighbours);
            }
        }
    }

    for (let i = 0; i < holePatchs.length; i++) {
        for (let j = 0; j < holePatchs.length; j++) {
            if (i != j) {
                let intersection = holePatchs[i].filter(member => holePatchs[j].includes(member));
                if (intersection.length > 0) {
                    let holePatchsCombine = holePatchs[i].concat(holePatchs[j]);

                    if (multiCluster.length == 0) {
                        multiCluster.push(holePatchsCombine);
                    } else {
                        for (let i = 0; i < multiCluster.length; i++) {
                            let intersection = multiCluster[i].filter(member => holePatchsCombine.includes(member));
                            if (intersection.length > 0) {
                                multiCluster[i].concat(holePatchsCombine);
                            }
                        };
                    }
                }
            }
        }
    }

    return singleCluster.length + multiCluster.length;
}

function findLinkedNeighbours(x, y, matrix) {
    let neighbours = [
        [`${x - 1}${y}`, matrix[y][x - 1]],
        [`${x}${y - 1}`, y - 1 > 0 ? matrix[y - 1][x] : undefined],
        [`${x + 1}${y}`, matrix[y][x + 1]],
        [`${x}${y + 1}`, y + 1 < matrix.length ? matrix[y + 1][x] : undefined]
    ];

    let linkedNeighbours = neighbours.filter(entry => entry[1] == 0).map(value => value[0]);

    return linkedNeighbours;
}

console.log(BitmapHoles([
    "1011",
    "0010"
]));

console.log(BitmapHoles([
    "1101",
    "0100"
]));

console.log(BitmapHoles([
    "1101",
    "1000"
]));

console.log(BitmapHoles([
    "01111",
    "01101",
    "00001",
    "11110"
]));

console.log(BitmapHoles([
    "01111",
    "01101",
    "11101",
    "01100"
]));

console.log(BitmapHoles([
    "11011",
    "10001",
    "11011",
    "11011"
]));