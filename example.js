const monarch = require('./index');

monarch.Load('cpp');
let tokenizer = monarch.Tokenizer('cpp');
let result = tokenizer.classicTokenize('int main () {\n\treturn 0;\n}\n');
console.log(result);