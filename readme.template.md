# RFUNCS

A collection of amazing functions:

{{#functions}}
## {{name}}
{{description}}
{{#sections}}
{{#tests}}
```javascript
{{ &test }}
{{#logs}}
{{.}}
{{/logs}}
// => {{ &result }}
```

{{/tests}}
{{/sections}}
{{/functions}}