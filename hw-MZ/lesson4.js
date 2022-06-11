let createObject = (...someArgs) => {      

    return {
        logins : someArgs.filter(el=> typeof(el) != 'number').join(','),
        count : +someArgs.filter(el=> typeof(el) == 'number').join(''),
    }  

}

console.log(createObject(3,"test","test2"));