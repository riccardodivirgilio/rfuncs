
import fs       from 'fs'
import path     from 'path'
import template from 'mustache'

import map      from '../functions/map'
import scan     from '../functions/scan'
import filter   from '../functions/filter'
import sort     from '../functions/sort'

import template_to_file from './utils/template_to_file' 


function find(folder) {
    return sort(
        map(
            name => path.basename(name, '.js'),
            filter(
                name => path.extname(name) == '.js',
                fs.readdirSync(path.join(__dirname, '..', folder))
            )
        )
    )
}

const t = fs.readFileSync(path.join(__dirname, '..', 'all.template.js'), 'utf8')
 
scan(
    name => template_to_file(
        path.join(__dirname, '..', 'all.template.js'),
        path.join(__dirname, '..', 'all', name + '.js'),
        {'names': find(name), 'path': '../' + name}
    ),
    //['functions', 'spec']
    []
)


