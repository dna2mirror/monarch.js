# monarch.js

Migrated from Mircrosoft Monarch for basic parsing source code

### How to use

```
const monarch = require('monarch.js');

monarch.Load('java');
let tokenizer = monarch.Tokenizer('java');
let result = tokenizer.classicTokenize(`// Type source code in your Java here...
public class HelloWorld {
   public static void main(String[] args) {
      System.out.println("Hello, World");
   }
}`);
console.log(result);


### output sample ###

[ Token { offset: 0, type: '', language: 'java' },
  Token { offset: 3, type: 'identifier.java', language: 'java' },
  Token { offset: 7, type: '', language: 'java' },
  Token { offset: 8, type: 'identifier.java', language: 'java' },
  Token { offset: 14, type: '', language: 'java' },
  Token { offset: 15, type: 'identifier.java', language: 'java' },
  Token { offset: 19, type: '', language: 'java' },
  Token { offset: 20, type: 'identifier.java', language: 'java' },
  Token { offset: 22, type: '', language: 'java' },
  Token { offset: 23, type: 'identifier.java', language: 'java' },
  Token { offset: 27, type: '', language: 'java' },
  Token { offset: 28, type: 'identifier.java', language: 'java' },
  Token { offset: 32, type: '', language: 'java' },
  Token { offset: 33, type: 'identifier.java', language: 'java' },
  Token { offset: 37, type: 'delimiter.java', language: 'java' },
  Token { offset: 40, type: '', language: 'java' },
  Token { offset: 41, type: 'keyword.public.java', language: 'java' },
  Token { offset: 47, type: '', language: 'java' },
  Token { offset: 48, type: 'keyword.class.java', language: 'java' },
  Token { offset: 53, type: '', language: 'java' },
  Token { offset: 54, type: 'identifier.java', language: 'java' },
  Token { offset: 64, type: '', language: 'java' },
  Token { offset: 65, type: 'delimiter.curly.java', language: 'java' },
  Token { offset: 66, type: '', language: 'java' },
  Token { offset: 70, type: 'keyword.public.java', language: 'java' },
  Token { offset: 76, type: '', language: 'java' },
  Token { offset: 77, type: 'keyword.static.java', language: 'java' },
  Token { offset: 83, type: '', language: 'java' },
  Token { offset: 84, type: 'keyword.void.java', language: 'java' },
  Token { offset: 88, type: '', language: 'java' },
  Token { offset: 89, type: 'identifier.java', language: 'java' },
  Token {
    offset: 93,
    type: 'delimiter.parenthesis.java',
    language: 'java' },
  Token { offset: 94, type: 'identifier.java', language: 'java' },
  Token { offset: 100, type: 'delimiter.square.java', language: 'java' },
  Token { offset: 102, type: '', language: 'java' },
  Token { offset: 103, type: 'identifier.java', language: 'java' },
  Token {
    offset: 107,
    type: 'delimiter.parenthesis.java',
    language: 'java' },
  Token { offset: 108, type: '', language: 'java' },
  Token { offset: 109, type: 'delimiter.curly.java', language: 'java' },
  Token { offset: 110, type: '', language: 'java' },
  Token { offset: 117, type: 'identifier.java', language: 'java' },
  Token { offset: 123, type: 'delimiter.java', language: 'java' },
  Token { offset: 124, type: 'identifier.java', language: 'java' },
  Token { offset: 127, type: 'delimiter.java', language: 'java' },
  Token { offset: 128, type: 'identifier.java', language: 'java' },
  Token {
    offset: 135,
    type: 'delimiter.parenthesis.java',
    language: 'java' },
  Token { offset: 136, type: 'string.java', language: 'java' },
  Token {
    offset: 150,
    type: 'delimiter.parenthesis.java',
    language: 'java' },
  Token { offset: 151, type: 'delimiter.java', language: 'java' },
  Token { offset: 152, type: '', language: 'java' },
  Token { offset: 156, type: 'delimiter.curly.java', language: 'java' },
  Token { offset: 157, type: '', language: 'java' },
  Token { offset: 158, type: 'delimiter.curly.java', language: 'java' } ]
```

### How to get more supported languages

1. npm install monaco-languages
2. select a language and copy its '.js' file
3. remove `define` wrap and add `exports.name`
4. (alternatively) run `scripts/update_languages.sh` to import all from monaco-languages

see also the example of `languages/cpp.js`
