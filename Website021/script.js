// for loop = repeat some  code a LIMITED amount of times

for(let i = 0; i < 3; i++){
    console.log(`${i+1}. Hello World!`);
}

for(let i = 2; i<=10; i+=2){
    console.log(i);
}

for(let i = 10; i > 0; i--){
    console.log(i);
}

for (let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
    }
    console.log(i);
}