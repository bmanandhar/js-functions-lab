// Question 1
var maxOfTwoNumbers = function(numOne, numTwo) {
	if (numOne > numTwo) {
		console.log("First argument " + numOne + " is greater than " + " second argument " + numTwo)
	} else {
		console.log("First argument" + numOne + " is less than " + " second argument " + numTwo)
	}
}

maxOfTwoNumbers(31, 20) === 31;

// Question 2
var maxOfThree = function(num1, num2, num3) {
	var greatestNum;
	if (num1 > num2 && num1 > num3) { 
		greatestNum = num1;
	} else if (num2 > num1 && num2 > num3) {
		greatestNum = num2;
	} else {
		greatestNum = num3;
	}

	console.log(greatestNum);
}

maxOfThree(5, 8, 3) === 8;

// Question 3
var isCharacterAVowel = function(char) {
	if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
		console.log("It is a vowel.")
	} else {
		console.log("It is not a vowel.")
	}
}
isCharacterAVowel("u")
isCharacterAVowel("t");

// Question 4
var sumArray = function(array) {
	sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i]
	}
	console.log(sum);
}

sumArray([1,2,3,4]) === 10;


// Question 4
var multiplyArray = function(array) {
	product = 1;
	for (var i = 0; i < array.length; i++) {
		product *= array[i]
	}
	console.log(product);
}

multiplyArray([1,2,3,4]);


// Question 5
var numberOfArguments = function(arguments) {
	console.log(arguments.length)
}

numberOfArguments([1,3,6,9]);

// Question 6
var reverseString = function (string){
	reversedString = "";
	for (var i = string.length - 1; i >= 0; i --) {
		reversedString += string[i];
	};
	console.log(reversedString);
}

reverseString("United States");

// Question 7
var findLongestWord = function(arrayOfWords) {
	longestWord = "";
	for (var i = 0; i < arrayOfWords.length; i++) {
		console.log(arrayOfWords[i].length)
		if (arrayOfWords[i].length > longestWord.length) {
			longestWord = arrayOfWords[i];
		}
	}
	console.log(longestWord);
}
findLongestWord(["Newton", "Darwin", "Charles"]);

// Question 8
var filterLongWords = function(arrayOfWords, i) {
	newArray = [];
	for (var j = 0; j < arrayOfWords.length; j++) {
		if (arrayOfWords[j].length > i) {
			newArray.push(arrayOfWords[j])
		}
	}
	console.log(newArray);
}

filterLongWords(["twist", "fist", "mountain", "count", "eat"], 4);
 

// Bonus 1
//??????


// Bonus 2 

function charactersOccurencesCount(string) {

} 

//comments:

