/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// with placeholder for testing: 
//let firstName = ( prompt( "Your name ", "Hinda" ) );

let firstName = ( prompt( "Your name " ) );
let age = Number( prompt( "Your age" ) );


if (age >= 0 && age <= 5 ) {
    console.log(firstName + " trinkt Milch");
    
} else if(age >= 6 &&  age <= 12) {
    console.log(firstName + " trinkt Saft");

} else if (age >= 13 && age <= 17) {
    console.log(firstName + " trinkt Cola");

} else {
    console.log(firstName + " trinkt Wein");

}

