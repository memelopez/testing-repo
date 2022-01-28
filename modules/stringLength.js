// function for string length

const stringLength = (str) => {
  const string = str.length;

  if (string <= 0 || string > 10) {
    return 'String must contain 1-10 characters.';
  } else {
    return string;
  }
}

export default stringLength;