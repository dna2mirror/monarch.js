# monarch.js

Migrated from Mircrosoft Monarch for basic parsing source code

### How to use

```
const monarch = require('monarch.js');

monarch.Load('cpp');
let tokenizer = monarch.Tokenizer('cpp');
let result = tokenizer.classicTokenize('int main () {\n\treturn 0;\n}\n');
console.log(result);
```

### How to get more supported languages

1. npm install monaco-languages
2. select a language and copy its '.js' file
3. remove `define` wrap and add `exports.name`

see also the example of `languages/cpp.js`
