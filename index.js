function largestNum(n1, n2, n3, n4, n5) {
  if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    console.log(n1);
  }
  else if (n2 > n1 && n2 > n3  && n2 > n4 && n2 > n5) {
    console.log(n2);
  }
  else if (n3 > n1 && n3 > n2  && n3 > n4 && n3 > n5) {
    console.log(n3);
  }
  else if (n4 > n1 && n4 > n2 && n4 > n3  && n4 > n5) {
    console.log(n4);
  }
  else {
    console.log(n5);
  }
}
largestNum(-5, -2, -6, 0, -1);
