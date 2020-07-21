import fs from "fs"
import path from "path"
import template from "mustache"

export default function template_to_file(source, dest, context) {
  const t = fs.readFileSync(source, "utf8")

  const output = template.render(t, context).replace(/\n[\n]+/g, "\n\n")

  fs.writeFileSync(dest, output)

  return dest
}
