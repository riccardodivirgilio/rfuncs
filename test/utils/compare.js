
import assert from "assert"

export default {
    as_json: (a, b) => assert.equal(JSON.stringify(a), JSON.stringify(b)),
    equal: assert.equal
}