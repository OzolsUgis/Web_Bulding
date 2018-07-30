newFunction();



function newFunction() {
    for (i = 0; i <= 50; i++) {
        if (i % 2 == 0 && i % 3 ==0) {
            console.log(i + ' : fiz baz');
        }else if (i % 2 == 0){
            console.log(i + ' : fiz')
        }else if (i % 3 == 0){
            console.log(i + ' : baz')
        }
        else {
            
            console.log(i + ' : ' + i );
        }
    }
}
