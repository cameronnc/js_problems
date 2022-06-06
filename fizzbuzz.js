/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let i = 1; 
    let answer = [];
    
    while (i <= n){
        if (i % 3 === 0 &&  i % 5 === 0){
            answer[i] = 'FizzBuzz';}
        else if (i % 3 === 0){
            answer[i] = 'Fizz';}
        else if (i % 5 === 0){
            answer[i] = 'Buzz';}
        else{
            answer[i] = i.toString();}
    i+=1;
    }
    answer.shift();
    
    return answer;
};