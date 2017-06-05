var presidents = require("./script.js");

var fs = require("fs"); // necessary to write and print to a txt file

var userChoice = process.argv[2];

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.printInfo = function() {
        console.log(this.front); // present initial question     
    };
}

if (userChoice === "front") {
    var random = Math.floor((Math.random() * 45) + 1); // create random num from 1 to 45
    var presName = presidents[random].name; // random president name
    var presNum = presidents[random].number; // random president number
    var president = new BasicCard("Who was the " + presNum + " president of the United States?", presName); // insert random president into question
    president.printInfo(); // callback to console.log a question

    fs.writeFile("president.txt", presName, function(err) { // write president name to a txt file - necessary for random president question/answer match
        if (err) {
            console.log(err);
        }
    });
}
else if (userChoice === "back") {
    fs.readFile("./president.txt", "utf8", function(err, data){ // read president name from txt file
        if (err) {
            console.log(err);
        }
        else if (data === "") { // if no data in txt file
            console.log("You need to enter 'front' before 'back'");
        }
        else { // show matching president name
            presName = data;
            console.log(presName);
        }
    });
}

module.exports = BasicCard;