var presidents = require("./script.js");

var fs = require("fs"); // necessary to write and print to a txt file

var userChoice = process.argv[2];

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(this.cloze, "..."); // replace presidents name with ...
    this.printInfo = function() {
        console.log(this.partial); // present initial question 
    };
}

if (userChoice === "text") {
    var random = Math.floor((Math.random() * 45) + 1); // create random num from 1 to 45
    var presName = presidents[random].name; // random president name
    var presNum = presidents[random].number; // random president number
    var president = new ClozeCard(presName + " was the " + presNum + " president of the United States?", presName); // insert random president into question
    president.printInfo(); // callback to console.log a question

    fs.writeFile("president.txt", presName, function(err) { // write president name to a txt file - necessary for random president question/answer match
        if (err) {
            console.log(err);
        }
    });
}
else if (userChoice === "cloze") {
    fs.readFile("./president.txt", "utf8", function(err, data){ // read president name from txt file
        if (err) {
            console.log(err);
        }
        else if (data === "") { // if no data in txt file
            console.log("You need to enter 'text' before 'cloze'");
        }
        else { // show matching president name
            presName = data;
            console.log(presName);
        }
    });
}

module.exports = ClozeCard;