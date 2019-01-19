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

function Tokenizer(language, externalTokenizer) {
   let tokenizerSet = externalTokenizer;
   if (!tokenizerSet) tokenizerSet = tokenizer;
   let language_package = tokenizerSet[language];
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
         let state = {
            stack: monarchLexer.MonarchStackElementFactory.create(null, 'root'),
            embeddedModeData: null
         };
         let tokens = [];
         let lines = text.split('\n');
         let text_offset = 0;
         lines.forEach((line) => {
            let r = adapter.tokenize(line, state, 0);
            if (r) {
               r.tokens.forEach((token) => {
                  token.offset += text_offset;
                  return token;
               });
               tokens = tokens.concat(r.tokens);
               state = r.endState;
               text_offset += line.length+1;
            } else {
               throw 'Unknown parsing error.';
            }
         });
         return tokens;
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