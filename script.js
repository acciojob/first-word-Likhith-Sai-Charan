function firstWord(s) {
  // your code here
	const words=s.split(" ");
	return words[0];
}

// Do not change the code below

console.log(firstWord('see and stop'))
console.log(firstWord('Hello World!'))

//const s = prompt("Enter String:");
//alert(firstWord(s));
