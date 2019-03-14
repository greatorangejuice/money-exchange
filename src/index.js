// PLEASE DON'T change function name
// module.exports = function makeExchange(currency) {
 

// }

module.exports =
 function makeExchange(currency) {
    let result = {
       
    };
    if (currency >= 10000) {
        result["error"] = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }

    if (currency < 0) {
        return result;
    }

    let H = (currency / 50 ^ 0);
    currency -= H*50;
    if (H >= 1) {
        result.H = H;
    }

    console.log(`H = ${H}, currency = ${currency}`);

    let Q = currency / 25 ^ 0; 
    currency -= Q*25;
    if (Q >= 1) {
        result.Q = Q;
    }
    console.log(`Q = ${Q}, ${currency}`)
    let D = currency  / 10 ^ 0; 
    currency -= D*10;
    if (D >= 1) {
        result.D = D;
    }
    let N = currency / 5 ^ 0;
    currency -= N*5;
    if (N >= 1) {
        result.N = N;
    }
    console.log(`N = ${N}, currency = ${currency}`)
    let P = currency / 1 ^ 0;
    if (P >= 1) {
        result.P = P;
    }
    console.log(`P = ${P}, currency = ${currency}`)

// console.log(result);
return result;

}