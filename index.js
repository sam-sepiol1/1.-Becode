function century(year) {
    // Finish this :)
    let century = 0;

    if (year%10 === 0) {
        century = year%100;
    } else { 
        century = year;
    }

    console.log(century);
    

    return century;
  }

  century(1900)