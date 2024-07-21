function mergeIntervals(intervalNumbers) {
    if (intervalNumbers.length === 0) return [];

    intervalNumbers = intervalNumbers.map(interval => interval.sort((a, b) => a - b));

    intervalNumbers.sort((a, b) => a[0] !== b[0] && a[0] - b[0]);

    let mergedIntervals = intervalNumbers.reduce((acc, item) => {
        if (acc.length === 0) {
            acc.push(item);
        } else {
            let lastMergedInterval = acc[acc.length - 1];
            if (item[0] <= lastMergedInterval[1]) {
                lastMergedInterval[1] = Math.max(lastMergedInterval[1], item[1]);
            } else {
                acc.push(item);
            }
        }
        return acc;

    }, []);
    return mergedIntervals;
}

const input = [[10, 8], [6, 2], [1,3], [12, 12], [2, -11]];
console.log(mergeIntervals(input));  