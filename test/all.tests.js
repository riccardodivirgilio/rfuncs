import filter from "../functions/filter"
import map from "../functions/map"
import scan from "../functions/scan"
import sort from "../functions/sort"
import template_to_file from "./utils/template_to_file"
import fs from "fs"
import template from "mustache"
import path from "path"

function find(folder) {
    return map(
        name => "" + path.basename(name, ".js"),
        filter(
            name => path.extname(name) == ".js",
            fs.readdirSync(path.join(__dirname, "..", folder)),
        ),
    ).sort((a, b) => (a < b ? -1 : 1))
}

const t = fs.readFileSync(path.join(__dirname, "..", "all.template"), "utf8")

scan(
    name =>
        template_to_file(
            path.join(__dirname, "..", "all.template"),
            path.join(__dirname, "..", "all", name + ".js"),
            { names: find(name), path: "../" + name },
        ),
    ["functions", "spec"],
)
