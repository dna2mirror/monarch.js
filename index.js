const monarchCompile = require('./monarchCompile');
const monarchLexer = require('./monarchLexer');

const tokenizer = {
   cpp: require('./languages/cpp'),
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
      tokenizer.cpp.name,
      tokenizer.cpp.language
   );
   let adapter = monarchLexer.createTokenizationSupport(
      null, null, tokenizer.cpp.name, lexer
   );
   return {
      getLexer: () => lexer,
      getTokenizer: () => adapter,
      classicTokenize: (text) => {
         let r = adapter.tokenize(text, {
            stack: { parent: null, depth: 0, state: 'root' },
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