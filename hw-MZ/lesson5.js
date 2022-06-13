// 1

let isEmptyObj = (obj)=>{
   for (let key in obj){
    return false;
    }

    return true;
}

// 2

let sumKeys = (obj)=>{

    let sum = 0;
    for (let key in obj){
        sum += obj.key
    }

    return sum;
}

// 3

let multiplyKeys = (obj,factor)=>{

   
    for (let key in obj){
        if (typeof(obj[key]) == 'number'){
            obj.key = obj[key] * factor;
        }
        
    }

    return obj;
}

// 4

class objTest {

    constructor(obj,factor){
        this.obj = obj;
        this.factor = factor;
    }

    isEmptyObj = (obj = this.obj)=>{
        for (let key in obj){
         return false;
         }
     
         return true;
     }


    sumKeys = (obj = this.obj)=>{

        let sum = 0;
        for (let key in obj){
            sum += obj[key];
        }
    
        return sum;
    }

    multiplyKeys = (obj,factor)=>{

   
        for (let key in obj){
            if (typeof(obj[key]) == 'number'){
                obj.key = obj[key] * factor;
            }            
        }
    
        return obj;
    }

}


let testClass = new objTest();