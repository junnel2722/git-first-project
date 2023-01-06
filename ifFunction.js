var age = 65;

function isAgeQualified(age){
    if (age >= 65 ){
            console.log('You get your income from your pension.');
     }  else if ((age >= 18  )&&(age< 65 )){
            console.log('Each month you get a salary.');
     }  else if ( age< 18 ){
            console.log('You get an allownce.');
     }  else{
            console.log('The value of the age variable is not numberical.');
     
        }
    }
isAgeQualified(age);