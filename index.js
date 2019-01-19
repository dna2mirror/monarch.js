const monarchCompile = require('./monarchCompile');
const monarchLexer = require('./monarchLexer');

const tokenizer = {
};

function Load (language) {
   let filename = `./languages/${language}`;
   try {
      let require_filename = require.resolve(filename);
      if (require.cache[require_filename]) {
         delete require.cache[require_filename];
         delete tokenizer[language];
      }
      tokenizer[language] = require(require_filename);
   } catch (e) {
      throw e;
   }
}

function Tokenizer(language) {
   let language_package = tokenizer[language];
   if (!language_package) {
      throw 'Error: cannot find the package of the specified language.';
   }
   let lexer = monarchCompile.compile(
      language_package.name,
      language_package.language
   );
   let adapter = monarchLexer.createTokenizationSupport(
      null, null, language_package.name, lexer
   );
   return {
      getLexer: () => lexer,
      getTokenizer: () => adapter,
      classicTokenize: (text) => {
         let r = adapter.tokenize(text, {
            stack: monarchLexer.MonarchStackElementFactory.create(null, 'root'),
            embeddedModeData: null
         }, 0);
         if (r) return r.tokens;
         throw 'Unknown error.';
      },
      modernTokenize: (text) => {
         // TODO: mock modeService and themeService
         throw 'Not implemented yet.';
      }
   };
}

const api = {
   Monarch: {
      Compiler: monarchCompile,
      Lexer: monarchLexer,
   },
   Load,
   Tokenizer
};

module.exports = api;