# RFUNCS

A collection of amazing functions:

{{#functions}}
## {{name}}
{{#usage}}
*{{ line }}*
 - {{ description }}

{{/usage}}

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