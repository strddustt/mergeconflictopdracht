const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()

function student2Haiku(){
    console.log("Frantically hiding Porno and Mapplethorpe print Mom is on her way.")
    }
function basicHaiku()
{
    return ["Toward those short trees","We saw a batman descending","In a basement with big D randy."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku(),
    student2Haiku()
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
