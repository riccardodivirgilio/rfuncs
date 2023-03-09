import fs from "fs"
import template from "mustache"
import path from "path"

export default function template_to_file(source, dest, context) {
    const t = fs.readFileSync(source, "utf8")

    const output = template.render(t, context).replace(/\n[\n]+/g, "\n\n")

    fs.writeFileSync(dest, output)

    return dest
}
