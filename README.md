# object-structure

traverse an object and gives its structure

```javascript
const t = require('object-structure')

console.log(JSON.stringify(t({a:{b:{c:1}}},null,2))

//{
//  "a": {
//    "b": {
//      "c": "number"
//    }
//  }
//}
```
