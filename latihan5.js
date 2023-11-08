function reverseNum(number) {
  const reversedNumber = parseInt(
    number.toString().split("").reverse().join("")
  );
  return reversedNumber;
}

console.log(reverseNum(123));
console.log(reverseNum(5872)); 