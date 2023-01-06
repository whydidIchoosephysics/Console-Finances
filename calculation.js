// Calculate the amount of months
let howmanyMonths = finances.length;

console.log("The total amount of months is", howmanyMonths);


// Calculate the Net Prodit/Loses
let netProfit = 0;

for (let month in finances) {
    netProfit = netProfit + finances[month][1];
}

console.log("The Net Profit is", netProfit);


// Calculate the average of the changes in Profit/Losses over the entire period

let changeInProfit = [];

for (let month in finances) {
    if (month == 0) {
        changeFromPreviousMonth = finances[month][1];
        changeInProfit.push(changeFromPreviousMonth);
    }
    else {
        changeFromPreviousMonth = finances[month][1] - finances[month-1][1];
        changeInProfit.push(changeFromPreviousMonth);
    }
}

let averageProfitSum = 0;

for (let value in changeInProfit) {
    averageProfitSum = averageProfitSum + finances[value][1];
}

let average = averageProfitSum / changeInProfit.length;

console.log("The average change in Profit/Losses is", average.toFixed(2));

// Find Maximum Profit

let largestProfit = Math.max.apply(Math, changeInProfit);

let largestProfitIndex = changeInProfit.indexOf(largestProfit);

console.log(largestProfit);
console.log (largestProfitIndex);
console.log("The greatest increase in profits is in", finances[largestProfitIndex][0],
 "with a value of", largestProfit);

// Find Worst Loss

let worstLoss = Math.min.apply(Math, changeInProfit);

let worstLossIndex = changeInProfit.indexOf(worstLoss);

console.log(worstLoss);
console.log (worstLossIndex);
console.log("The greatest decrease is losses", finances[worstLossIndex][0],
 "with a value of", worstLoss);





