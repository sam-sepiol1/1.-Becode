// calc sum of two numbers 
function calc_sum(a, b) {

    return a + b;
}

// calc division of two numbers 
function calc_div(a, b) {
    return a / b;
}


// calc modulo of b for value a
function calc_modulo(a, b) {
    return a % b
}


function concat(a, b) {
    if (typeof a && typeof b === 'string') {

        console.log(a + ' ' + b);
        return a + ' ' + b;

    } else {
        return 'not a string';

    }
}




// Receive price and add VAT to it

function calc_vat(a) {
    return a * 1.21;
}

// Calculate the surface of a circl

function calc_suface(radius) {

    return radius * 3.14;

}


// Convert actual time into seconds since midnight

function time_to_second() {
    
        let now = new Date();
        let hour = now.getHours() * 3600;
        let minute = now.getMinutes() * 60;
        let seconds = now.getSeconds();
        
        
        return hour + minute + seconds;    
}

time_to_second();




