function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var res;
        
        if (n === 1){
            res = [0];
        }
        else if (n === 2){
            res = [0,1];
        }
        else{
            res = [0,1];
            for (var i = 1;i < n-1; i++){
                var temp = res[i] + res[i-1];
                res.push(temp);
            } 
        }

        return res;

    }
    

    console.log(fibonacciGenerator(5));