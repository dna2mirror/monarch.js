const monarch = require('./index');

monarch.Load('java');
let tokenizer = monarch.Tokenizer('java');
let source = `// Type source code in your Java here...
public class HelloWorld {
   public static void main(String[] args) {
      System.out.println("Hello, World");
   }
}`;
let result = tokenizer.classicTokenize(source);
console.log(JSON.stringify(result, null, 3));