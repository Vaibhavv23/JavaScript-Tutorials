var markHeight, johnHeight, markWeight, johnWeight, bmiMark, bmiJohn;
markHeight = 1.72;
johnHeight = 1.68;
markWeight = 65;
johnWeight = 70;

bmiMark = markWeight / (markHeight * markHeight);
bmiJohn = johnWeight / (johnHeight * johnHeight);

var isGreater = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's?"+ isGreater);
