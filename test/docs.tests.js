
import fs       from 'fs'
import path     from 'path'
import template from 'mustache'

import specs       from '../all/spec'
import map         from '../functions/map'   
import merge       from '../functions/merge' 
import values      from '../functions/values' 
import is_function from '../functions/is_function' 

function serialize(arg){
    if (is_function(arg)) {
        return arg.toString()
    }
    return JSON.stringify(arg)

}

function stringify(payload, args) {
    return payload + '(' + map(serialize, args).join(', ') + ')'
}

function serializer(payload) {
    const func = function(...args) {
        return serializer(stringify(this.payload, args))
    }
    const res = func.bind({payload:payload})
    res.payload = payload
    return res
}

function collect(name, section) {
    const results = []

    if (! section.docs_skip && section.tests) {
        section.tests(
            serializer(name),
            (a, b) => results.push({'test': a.payload, result: serialize(b), logs: []})
        )        
    }

    return results.concat(section.examples || [])
}

const context = {
    functions: values(
        map(
            (spec, name) => merge(
                spec, {
                    name: name,
                    sections: map(
                        section => merge(section, {'tests': collect(name, section)}),
                        spec.sections
                    )
                },
            ), 
            specs
        )
    )
};

const t = fs.readFileSync(path.join(__dirname, '..', 'readme.template.md'), 'utf8')
 
const output = template.render(t, context).replace(/\n[\n]+/g, '\n\n');

fs.writeFileSync(path.join(__dirname, '..', 'readme.md'), output)
