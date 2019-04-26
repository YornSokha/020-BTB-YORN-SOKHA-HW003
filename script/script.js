var input = document.getElementById('number');

function enterKey(){
    Swal.fire({
        title: 'Error!',
        text: 'Please click button to specify the style!',
        type: 'error',
        confirmButtonText: 'OK'
    });
}

function validation(btnNumber) {
    var message = document.getElementById('message');
    try {
        if (input.value === "") throw 'You must enter number';
        if (input.value > 10) throw 'Value must not greater than 10';
        if (isNaN(input.value)) throw 'Value must be number';
        message.setAttribute('style', 'visibility:hidden');
        printShape(input.value, btnNumber);
    } catch (err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            type: 'error',
            confirmButtonText: 'OK'
        }).then(function(){
        input.value = '';
        input.focus()
    });
    }
}


function printShape(n, btnNumber) {
    switch (btnNumber) {
        case 1:
            printShape1(n);
            break;
        case 2:
            printShape2(n);
            break;
        case 3:
            printShape3(n);
            break;
        case 4:
            printShape4(n);
            break;
        case 5:
            printShape5(n);
            break;
        case 6:
            printShape6(n);
            break;
        case 7:
            printShape7(n);
            break;
    }
}

function printShape1(n) {
    let i, j;
    let shape = document.getElementById('shape');
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = 0; i < n; i++) {

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop     
        for (j = 0; j <= i; j++) {
            // printing stars 
            shape.innerHTML += '* ';
        }
        shape.innerHTML += '<br/>';
        // ending line after each row 

    }
}

function printShape2(n) {
    let i, j;
    let shape = document.getElementById('shape');
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = n; i > 0; i--) {

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop     
        for (j = 0; j < i; j++) {
            // printing stars 
            shape.innerHTML += '* ';
        }
        shape.innerHTML += '<br/>';
        // ending line after each row 

    }
}

function printShape3(n) {
    let shape = document.getElementById('shape');
    let i, j;
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = 0; i < n; i++) {

        // inner loop to handle number spaces 
        // values changing acc. to requirement 
        if (i < n - 1) {
            shape.innerHTML += '.';
            for (j = ((n - i) * 2) - 2; j > 1; j--) {
                // printing spaces 
                shape.innerHTML += '..';
            }
        }

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop 
        for (j = 0; j <= (i * 2); j++) {
            // printing stars 
            shape.innerHTML += '*';
        }

        // ending line after each row 
        shape.innerHTML += '<br/>';
    }
}

function printShape4(n) {
    let shape = document.getElementById('shape');
    let i, j;
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = n; i > 0; i--) {
        if (i != n)
            shape.innerHTML += '.';
        // inner loop to handle number spaces 
        // values changing acc. to requirement 
        for (j = (2 * (n - i)); j > 1; j--) {
            // printing spaces 
            shape.innerHTML += '..';
        }

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop 
        for (j = 0; j < (i * 2 - 1); j++) {
            // printing stars 
            shape.innerHTML += '*';
        }

        // ending line after each row 
        shape.innerHTML += '<br/>';
    }
}