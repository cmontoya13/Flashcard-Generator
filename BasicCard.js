var ClozeCard = require("./ClozeCard.js");

var fs = require("fs"); // necessary to write and print to a txt file

var userChoice = process.argv[2];

var presidents = [ // jsObject array of U.S. Presidents including little-known ACTUAL first
    {number: "zero", name: "Christian Montoya"},
    {number: "first", name: "George Washington"},
    {number: "second", name: "John Adams"},
    {number: "third", name: "Thomas Jefferson"},
    {number: "fourth", name: "James Madison"},
    {number: "fifth", name: "James Monroe"},
    {number: "sixth", name: "John Quincy Adams"},
    {number: "seventh", name: "Andrew Jackson"},
    {number: "eighth", name: "Martin Van Buren"},
    {number: "ninth", name: "William Henry Harrison"},
    {number: "tenth", name: "John Tyler"},
    {number: "eleventh", name: "James K. Polk"},
    {number: "twelfth", name: "Zachary Taylor"},
    {number: "thirteenth", name: "Millard Fillmore"},
    {number: "fourteenth", name: "Franklin Pierce"},
    {number: "fifteenth", name: "James Buchanan"},
    {number: "sixteenth", name: "Abraham Lincoln"},
    {number: "seventeenth", name: "Andrew Johnson"},
    {number: "eighteenth", name: "Ulysses S. Grant"},
    {number: "nineteenth", name: "Rutherford B. Hayes"},
    {number: "twentieth", name: "James A. Garfield"},
    {number: "twentyfirst", name: "Chester A. Arthur"},
    {number: "twentysecond", name: "Grover Cleveland"},
    {number: "twentythird", name: "Benjamin Harrison"},
    {number: "twentyfourth", name: "Grover Cleveland"},
    {number: "twentyfifth", name: "William McKinley"},
    {number: "twentysixth", name: "Theodore Roosevelt"},
    {number: "twentyseventh", name: "William Howard Taft"},
    {number: "twentyeighth", name: "Woodrow Wilson"},
    {number: "twentyninth", name: "Warren G. Harding"},
    {number: "thirtieth", name: "Calvin Coolidge"},
    {number: "thirtyfirst", name: "Herbert Hoover"},
    {number: "thirtysecond", name: "Franklin D. Roosevelt"},
    {number: "thirtythird", name: "Harry S. Truman"},
    {number: "thirtyfourth", name: "Dwight D. Eisenhower"},
    {number: "thirtyfifth", name: "John F. Kennedy"},
    {number: "thirtysixth", name: "Lyndon B. Johnson"},
    {number: "thirtyseventh", name: "Richard Nixon"},
    {number: "thirtyeighth", name: "Gerald Ford"},
    {number: "thirtyninth", name: "Jimmy Carter"},
    {number: "fortieth", name: "Ronald Reagan"},
    {number: "fortyfirst", name: "George H. W. Bush"},
    {number: "fortysecond", name: "Bill Clinton"},
    {number: "fortythird", name: "George W. Bush"},
    {number: "fortyfourth", name: "Barack Obama"},
    {number: "fortyfifth", name: "Donald Trump"}
];

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