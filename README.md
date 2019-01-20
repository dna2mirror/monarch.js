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
console.log(JSON.stringify(result, null, 3));


### output sample ###

[
   {
      "offset": 0,
      "type": "comment.java",
      "language": "java"
   },
   {
      "offset": 41,
      "type": "keyword.public.java",
      "language": "java"
   },
   {
      "offset": 47,
      "type": "",
      "language": "java"
   },
   {
      "offset": 48,
      "type": "keyword.class.java",
      "language": "java"
   },
   {
      "offset": 53,
      "type": "",
      "language": "java"
   },
   {
      "offset": 54,
      "type": "identifier.java",
      "language": "java"
   },
   {
      "offset": 64,
      "type": "",
      "language": "java"
   },
   {
      "offset": 65,
      "type": "delimiter.curly.java",
      "language": "java"
   },
   {
      "offset": 67,
      "type": "",
      "language": "java"
   },
   {
      "offset": 70,
      "type": "keyword.public.java",
      "language": "java"
   },
   {
      "offset": 76,
      "type": "",
      "language": "java"
   },
   {
      "offset": 77,
      "type": "keyword.static.java",
      "language": "java"
   },
...
   {
      "offset": 117,
      "type": "identifier.java",
      "language": "java"
   },
   {
      "offset": 123,
      "type": "delimiter.java",
      "language": "java"
   },
   {
      "offset": 124,
      "type": "identifier.java",
      "language": "java"
   },
   {
      "offset": 127,
      "type": "delimiter.java",
      "language": "java"
   },
   {
      "offset": 128,
      "type": "identifier.java",
      "language": "java"
   },
   {
      "offset": 135,
      "type": "delimiter.parenthesis.java",
      "language": "java"
   },
   {
      "offset": 136,
      "type": "string.java",
      "language": "java"
   },
   {
      "offset": 150,
      "type": "delimiter.parenthesis.java",
      "language": "java"
   },
   {
      "offset": 151,
      "type": "delimiter.java",
      "language": "java"
   },
   {
      "offset": 153,
      "type": "",
      "language": "java"
   },
   {
      "offset": 156,
      "type": "delimiter.curly.java",
      "language": "java"
   },
   {
      "offset": 158,
      "type": "delimiter.curly.java",
      "language": "java"
   }
]
```

### How to get more supported languages

1. npm install monaco-languages
2. select a language and copy its '.js' file
3. remove `define` wrap for ASM style (change `export var ...` to `exports.` for ESM style)
4. add `exports.name`

see also the example of `languages/cpp.js`
