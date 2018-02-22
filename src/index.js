module.exports = function getZerosCount(number, base) {
  // your implementation
    var count = 0;
    const mn_ar = factorization(base);
    var max_divider = parseInt(mn_ar[0]);
    var min_divider = parseInt(mn_ar[0]);

    mn_ar.forEach(function (value) {
        if(parseInt(value)>max_divider){
            max_divider=value;
        }
        else if(parseInt(value)<min_divider){
            min_divider = value;
        };
    });
    var count_in = 0;
    mn_ar.forEach(function (value) {
        if(value==max_divider) count_in++;
    });

    while (number>=max_divider){
        number = Math.trunc(number/max_divider);
        count+=number;
    };

    return Math.floor(count/count_in);
};


function factorization(number) {
    var j = 0;
    var i = 2;
    var arr = [];
    if(i!=number){
        do
        {
            if (number % i == 0)
            {
                arr[j] = i;
                j++;
                number/= i;
            }
            else
            {
                i++;
            }
        }
        while (i < number);
    }
    arr[j] = i;
    return arr;
}


