
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
const credentials = require('./credentials');

var languageTranslator = new LanguageTranslatorV3({
    version: credentials.version,
    username: credentials.username,
    password: credentials.password,
    url: credentials.url
});

var parameters = {
    text: 'Hello',
    model_id: 'en-es'
};

languageTranslator.translate(
    parameters,
    function(error, response) {
        if (error)
            console.log(error)
        else
            console.log(JSON.stringify(response, null, 2));
    }
);

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
        // console.log(JSON.stringify(response, null, 2));
    }
  );

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