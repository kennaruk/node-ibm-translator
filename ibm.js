
var readlineSync = require('readline-sync');
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
const credentials = require('./credentials');

var languageTranslator = new LanguageTranslatorV3({
    version: credentials.version,
    username: credentials.username,
    password: credentials.password,
    url: credentials.url
});

var translate = () => {
    var parameters = {
        text: 'Hello my name is Ken',
        model_id: 'en-it'
    };
    languageTranslator.translate(
        parameters,
        function(error, response) {
            if (error)
                console.log(error)
            else
                console.log(response.translations[0].translation);
        }
    );
}

var identify = () => {
    var parameters = {
        text: 'Language translator translates text from one language to another'
    }
    languageTranslator.identify(
        parameters,
        function(error, response) {
            if (error)
            console.log(error)
            else
            console.log(JSON.stringify(response, null, 2));
        }
    );
}

var listIdentifiable = () => {
    languageTranslator.listIdentifiableLanguages(
        {},     
        function(err, response) {
            if (err)
                console.log(err)
            else {
                console.log('Identifiable:');
                console.log('language, name');
                response.languages.forEach( (item) => {
                console.log(`${item.language}, ${item.name}`);
                });
            }
        }           
    );
}

var listModels = () => {
    languageTranslator.listModels(
        {},
        function(error, response) {
            if (error)
            console.log(error);
            else {
                console.log('Model:');
                response.models.forEach( (item) => {
                console.log(`${item.model_id}`);
                });
            }
        }
    );
}

var choices = ["Translate", ,"Identify", "ListModels", "ListIdentifiable"]
const choice = readlineSync.keyInSelect(choices, "Select Demo Options"); 
switch(choice)  {
    case 1: translate(); break;
    case 2: identify(); break;
    case 3: listModels(); break;
    case 4: listIdentifiable(); break;
    case -1:
    default: return;
}
