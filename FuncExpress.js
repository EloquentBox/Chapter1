//Function Declaration
//function whatDoYouDo(job, firstName){}

//Statement instead of expression doesn't produce anything immediately

//Function Expression
let whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher': 
            return firstName + ' teaches kids how to code';

        case 'driver':
            return firstName + ' drives a cab in Lisbon';

        case 'designer':
            return firstName + ' designs beautiful website';

        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));

console.log('gdzie to jest?');