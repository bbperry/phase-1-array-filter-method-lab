function findMatching(array, string) {
  return array.filter((element) => {
    return element.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  return array.filter((element) => {
    return element.startsWith(string);
  });
}

function matchName(array, string) {
  return array.filter(({ name }) => {
    return name === string;
  });
}
