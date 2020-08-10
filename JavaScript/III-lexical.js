// LEXICAL ENVIRONMENT (~Scope)

var myVariable="Tarnet";
console.log(`Global Environment-> text1:${text1}`);
//console.log(`Global Scope-> text2:${text2}`);
console.log(`First Lexical Environment -> myVarible:${myVariable}`);
{
    var text1="TKK";
    // console.log(`First Lexical-> Text: ${text2}`);
    let text2="Adem Seker";
    console.log(`First Lexical-> Text: ${text2}`);
    console.log(`Second Lexical Environment -> myVariable:${myVariable}`);
    {
        myVariable="Tarim Kredi";
        console.log(text2);
        console.log(`Second -> myVariable:${myVariable}`);
    }
}
