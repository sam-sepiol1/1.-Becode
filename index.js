function filter_list(l) {
  let new_array = []; 

  for (const element of l) {
    if (typeof element === 'number' && element >=0 ) {
      new_array.push(element);
    } 
      
    
  }

  return new_array


}


filter_list([1,2,'a','b']);