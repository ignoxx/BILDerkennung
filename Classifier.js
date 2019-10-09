var bayes = require('bayes');
var classifier = bayes();


classifier.learn('Unbekannte haben am Montag in Rom (Italien) eine Puppe mit langen, geflochtenen Zöpfen und in einem gelben Regencape am Geländer einer Brücke aufgehängt. Die Ähnlichkeit zu der jungen Schwedin ist gewollt – über der makaberen Puppe hängt ein Schild mit den Worten: „Greta is your God“ (deutsch: „Greta ist euer Gott“).', 'BILD')

classifier.learn('Als „AfD-Gesinnungsgenosse“ wurde er bei Twitter genannt - und noch Schlimmeres. Eine regelrechte Wutwelle war über Dieter Nuhr hereingebrochen. Bröcker merkt im Podcast an: „Früher gab es schon oft Satire, Helmut Kohl als Diktator oder der Papst mit dem Urinfleck. Jetzt hatte man das Gefühl: Bei der Ikone der Klimabewegung ist das nun wirklich ein Tabubruch.“', 'Nicht BILD')

function handleClassify(request, response) {
    let result = classifier.categorize(request.body.article);

    if (result == "BILD")
        response.sendFile(__dirname + '/bild.html')
    else
        response.sendFile(__dirname + '/notbild.html')
}

this.handle = handleClassify;