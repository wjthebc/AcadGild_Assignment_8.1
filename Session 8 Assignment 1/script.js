function isPrime(number) {
  //returns false if argument is 1
  if (number === 1) {
    return false;
  }
  //returns true if argument is 2
  else if(number === 2) {
    return true;
  }
  //for all arguements not 1 or 2, returns false if the argument divided by any number less than the argument and greater than 1 has a remainder of 0.
  else {
    for(var i = 2; i < number; i++) {
      if(number % i === 0) {
        return false;
      }
    }
  //else, returns true (implies that the argument divided by some number less than the argument and greater than 1 has a remainder of 0.)
    return true;
  }
}
