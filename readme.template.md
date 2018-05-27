# RFUNCS

A collection of amazing functions:

{{#functions}}
## {{name}}
{{description}}
{{#sections}}
{{#usage}}
*{{ line }}*
 - {{ description }}

{{/usage}}

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