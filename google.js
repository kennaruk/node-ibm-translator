var credentials = require('./google-credentials.json');
// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = 'สวัสดีครับ ผมชื่อเล่นชื่อเคน';
const target = 'en';

// Translates the text into the target language. "text" can be a string for
// translating a single piece of text, or an array of strings for translating
// multiple texts.
translate
  .translate(text, target)
  .then(results => {
    let translations = results[0];
    translations = Array.isArray(translations)
      ? translations
      : [translations];

    console.log('Translations:');
    translations.forEach((translation, i) => {
      console.log(`${text[i]} => (${target}) ${translation}`);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });