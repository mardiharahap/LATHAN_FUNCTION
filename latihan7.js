function letterCount(str, letter) {
  const letterToSearch = letter.toLowerCase();
  const strToSearch = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < strToSearch.length; i++) {
    if (strToSearch[i] === letterToSearch) {
      count++;
    }
  }

  return count;
}

console.log(letterCount("Connect", "c"));
console.log(letterCount("first person", "s")); 
