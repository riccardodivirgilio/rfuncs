
{{#names}}
import {{.}} from '{{&path}}/{{.}}'    
{{/names}}

export default {
{{#names}}
    {{.}},
{{/names}}
}