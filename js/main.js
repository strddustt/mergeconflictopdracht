const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["running to the shade","We saw a batman descending","In a basement with big D randy."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen
function student1Haiku(){
    return["Auspicious autumn", "A single, solid cow hops", "above the chicken"]
}

haikus = [
    basicHaiku(),
    student1Haiku()
    
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()