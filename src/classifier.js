var bayes = require('bayes');
var classifier = bayes();

classifier.learn('Unbekannte haben am Montag in Rom (Italien) eine Puppe mit langen, geflochtenen Zöpfen und in einem gelben Regencape am Geländer einer Brücke aufgehängt. Die Ähnlichkeit zu der jungen Schwedin ist gewollt – über der makaberen Puppe hängt ein Schild mit den Worten: „Greta is your God“ (deutsch: „Greta ist euer Gott“).', 'BILD')
classifier.learn('Als „AfD-Gesinnungsgenosse“ wurde er bei Twitter genannt - und noch Schlimmeres. Eine regelrechte Wutwelle war über Dieter Nuhr hereingebrochen. Bröcker merkt im Podcast an: „Früher gab es schon oft Satire, Helmut Kohl als Diktator oder der Papst mit dem Urinfleck. Jetzt hatte man das Gefühl: Bei der Ikone der Klimabewegung ist das nun wirklich ein Tabubruch.“', 'NOT')

function handleClassify(req, res) {
    let resultText = classifier.categorize(req.body.article);
    let imgUrl;

    if (resultText == "BILD")
        imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/2000px-Logo_BILD.svg.png"
    else
        imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkA0qgG_ssUrUs92ZppkfYWqubazwPEzhaoxPuvMle7ZFrbEl"


    res.status(200).send({
        resultText: resultText,
        imgUrl: imgUrl
    });
}

this.handle = handleClassify;