function longestConsecutive(nums) {
    let longestStreak = 0;

    for (const num of nums) {
        if (!nums.includes(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (nums.includes(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            if (currentStreak > longestStreak) longestStreak = currentStreak;
        }
    }

    return longestStreak;
}

const input = [0, 100, 4, 101, 1, 3, 2, 103, 102, 105, 104];
console.log(longestConsecutive(input));  // Output: 6 (the sequence is [100, 101, 102, 103, 104, 105])
