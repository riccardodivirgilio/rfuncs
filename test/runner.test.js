import _ from "../all/functions"
import spec from "../all/spec"
import compare from "./utils/compare"

const runner = function () {
    _.scan((spec, name) => {
        _.scan(
            section =>
                it(section.name || name, () => {
                    if (section.tests) {
                        section.tests(_[name], compare.as_json)
                    }
                }),
            spec.sections,
        )
    }, spec)
}

runner()
