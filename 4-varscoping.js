function varScoping() {
    var x = 1;
  
    if (true) {
      x = 3;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    let y = 1;
  
    if (true) {
       y = 2;
      console.log(y); // will print 2
    }
  
    console.log(y); // will print 1
  }
  
  varScoping();
  letScoping();