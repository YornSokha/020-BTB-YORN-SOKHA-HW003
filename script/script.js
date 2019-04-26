var input = document.getElementById('number');
var shape = document.getElementById('shape');
var isRandom = true;
var lastEmoji;

var emoji = ['&#128540', '&#128542', '&#128523',
    '&#128528', '&#128554', '&#128152', '&#128158',
    '&#128586', '&#128154'];

input.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        enterKey();
    }
});

function random() {
    console.log(isRandom);
    isRandom = !isRandom;
}

function enterKey() {
    Swal.fire({
        title: 'Error!',
        text: 'Please click button to specify the style!',
        type: 'error',
        confirmButtonText: 'OK'
    }).then(function () {
        input.value = '';
    });
}

function validation(btnNumber) {
    try {
        if (input.value === "") throw 'You must enter number';
        if (input.value > 10) throw 'Value must not greater than 10';
        if (isNaN(input.value)) throw 'Value must be number';
        printShape(input.value, btnNumber);
    } catch (err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            type: 'error',
            confirmButtonText: 'OK'
        }).then(function () {
            input.value = '';
        });
    } finally {
        input.focus();
    }
}

function printShape(n, btnNumber) {
    let emojiType;
    if (isRandom) {
        emojiType = Math.floor(Math.random() * emoji.length);
        lastEmoji = emojiType;
    }
    else
        emojiType = lastEmoji;
    switch (btnNumber) {
        case 0:
            randomButtonClick(n);
            break;
        case 1:
            printShape1(n, emojiType);
            break;
        case 2:
            printShape2(n, emojiType);
            break;
        case 3:
            printShape3(n, emojiType);
            break;
        case 4:
            printShape4(n, emojiType);
            break;
        case 5:
            printShape5(n, emojiType);
            break;
        case 6:
            printShape6(n, emojiType);
            break;
        case 7:
            printShape7(n, emojiType);
            break;
    }
}

function randomButtonClick(n) {
    let funNumGenerated = Math.floor(Math.random() * 8);
    if (funNumGenerated != 0)
        document.getElementById('' + funNumGenerated).click();
}

function printShape1(n, emojiType) {
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = 0; i < n; i++) {

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop     
        for (j = 0; j <= i; j++) {
            // printing stars 
            shape.innerHTML += emoji[emojiType];
        }
        shape.innerHTML += '<br/>';
        // ending line after each row 

    }
}

function printShape2(n, emojiType) {
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = n; i > 0; i--) {

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop     
        for (j = 0; j < i; j++) {
            // printing stars 
            shape.innerHTML += emoji[emojiType];
        }
        shape.innerHTML += '<br/>';
        // ending line after each row 

    }
}

function printShape3(n, emojiType) {
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = 0; i < n; i++) {

        // inner loop to handle number spaces 
        // values changing acc. to requirement 
        if (i < n - 1) {
            for (j = ((n - i) * 2) - 2; j > 0; j--) {
                // printing spaces 
                shape.innerHTML += '...';
            }
        }

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop 
        for (j = 0; j <= (i * 2); j++) {
            // printing stars 
            shape.innerHTML += emoji[emojiType];
        }

        // ending line after each row 
        shape.innerHTML += '<br/>';
    }
}

function printShape4(n, emojiType) {
    shape.innerHTML = '';
    // outer loop to handle number of rows 
    //  n in this case 
    for (i = n; i > 0; i--) {
        if (i != n)
            shape.innerHTML += '.';
        // inner loop to handle number spaces 
        // values changing acc. to requirement 
        for (j = (2 * (n - i)); j > 0; j--) {
            // printing spaces 
            shape.innerHTML += '...';
        }

        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop 
        for (j = 0; j < (i * 2 - 1); j++) {
            // printing stars 
            shape.innerHTML += emoji[emojiType];
        }

        // ending line after each row 
        shape.innerHTML += '<br/>';
    }
}

function printShape5(n, emojiType) {
    n = (n / 2) + 1;
    shape.innerHTML = '';
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n - i; j++) {
            shape.innerHTML += '.......';
        }
        for (j = 1; j <= i; j++) {
            shape.innerHTML += emoji[emojiType];
        }
        for (j = i - 1; j >= 1; j--) {
            shape.innerHTML += emoji[emojiType];
        }
        shape.innerHTML += "<br/>";
    }
    for (i = n - 1; i >= 1; i--) {
        for (j = i; j < n; j++) {
            shape.innerHTML += '.......';
        }
        for (j = 1; j <= i; j++) {
            shape.innerHTML += emoji[emojiType];
        }
        for (j = i - 1; j >= 1; j--) {
            shape.innerHTML += emoji[emojiType];
        }
        shape.innerHTML += "<br/>";
    }
}

function printShape6(n, emojiType) {
    shape.innerHTML = '';
    for (i = 1; i <= n / 2; i++) {
        for (j = 0; j < i; j++) {
            if ((j + 1) == i)
                shape.innerHTML += emoji[emojiType];
            else
                shape.innerHTML += '...';
        }
        shape.innerHTML += '<br/>';
    }
    for (i = parseInt(n / 2) + 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if ((j + 1) == i) {
                shape.innerHTML += emoji[emojiType];
            }
            else
                shape.innerHTML += '...';

        }
        shape.innerHTML += '<br/>';
    }
}

function printShape7(n, emojiType) {
    shape.innerHTML = '';
    for (i = parseInt(n / 2) + 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if ((j + 1) == i) {
                shape.innerHTML += emoji[emojiType];
            }
            else
                shape.innerHTML += '...';
        }
        shape.innerHTML += '<br/>';
    }
    for (i = 2; i <= n / 2 + 1; i++) {
        for (j = 0; j < i; j++) {
            if ((j + 1) == i)
                shape.innerHTML += emoji[emojiType];
            else
                shape.innerHTML += '...';
        }
        shape.innerHTML += '<br/>';
    }
}