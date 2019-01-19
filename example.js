const monarch = require('./index');

monarch.Load('java');
let tokenizer = monarch.Tokenizer('java');
let result = tokenizer.classicTokenize(`// Type source code in your Java here...
public class HelloWorld {
   public static void main(String[] args) {
      System.out.println("Hello, World");
   }
}`);
console.log(result);