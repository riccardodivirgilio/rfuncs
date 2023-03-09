# RFUNCS

A collection of amazing functions:

{{#functions}}

## {{name}}

{{description}}
{{#sections}}
{{#usage}}
_{{ &line }}_

-   {{ &description }}

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
