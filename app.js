$('body').append('<h3>Promising Results</h3>');

let mathChain = new Promise((resolve, reject) => {
    let mathDiv = $('<div>');
    slowMath.add(6, 2)
    // slowMath.add(1, 1) // Rejects at the next add function after a negative value is returned in the previous step
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.multiply(num, 2);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.divide(num, 4);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.subtract(num, 3);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.add(num, 98);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.remainder(num, 2);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.multiply(num, 50);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.remainder(num, 40);
    })
    .then((num) => {
        console.log(num);
        $(`<p>${num}</p>`).appendTo(mathDiv).appendTo('body');
        return slowMath.add(num, 32);
    })
    .then((num) => {
        console.log(`The final result is ${num}`);
        $(`<p>The final result is ${num}</p>`).appendTo(mathDiv).appendTo('body').css("font-weight","bold");

    })
    .catch((err) => {
        alert(err);
        console.error(err);
    })
});