// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (millisseconds)
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay);

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

setTimeout(function(){window.alert("Hello World!")}, 6000);

setTimeout(() => window.alert("Hello World!"), 9000);


// clearTimeout(timeoutId) = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("Hello"), 12000);

clearTimeout(timeoutId);