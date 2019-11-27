function findLargest(numbers) {
  return numbers && numbers.length > 0 ? numbers.reduce((max, n) => n > max ? n : max) : 0;
}