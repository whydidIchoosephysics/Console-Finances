# Console-Finances

Code for analyzing the financial records of a company  with financial dataset in the starter/index.js file.

- A second JavaScript File was created with the scope to have the data and the code that did all the calculations
separate, so readability and usability can be increased.

- In the calculation.js file the following were done:

  - The length of the initial array was found to be 86 months

  - The Net Profit/Loses was found to be 38 382 578
using a for loop

- The changes in Profit/Losses over the entire period was calculated and stored in a new array:
a for loop, nesting an if statement was used to calculate the values

- The average was calculated by summing the values in the new array using the same for loop as the first one,
and the value was divided by the length of the array (including the first month)
  - Average change: 446309.05

- For the Greatest Increase in Profits:
"Math.max.apply(Math, changeInProfit)" was used to find the maximum value in the array and
"changeInProfit.indexOf(largestProfit)" was used to find the index of that value so the Month could be determined
  - Result: Feb-2012 and 1 926 159

- For the Greatest Decrease in Losses the same was done but min was used instead
  - Result: Sep-2013 and -2 196 167

- Sorting could also be used to find max and min values
