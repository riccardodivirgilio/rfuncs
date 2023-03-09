import economy from "../test/utils/economy"

export default {
    sections: [
        {
            tests: (part, compare) => {
                const db = economy()

                compare(part(db, "person", "pk.0", "full_name"), [
                    "Deanna Gardner",
                ])
                compare(part(db, "person", ["pk.0", "pk.1"], "full_name"), [
                    "Deanna Gardner",
                    "Brian Rodriguez",
                ])
                compare(part(db, null, "pk.0", "pk"), ["pk.0", "pk.0"])
                compare(part(db, "person", ["pk.1", "pk.7"]), [
                    { pk: "pk.1", full_name: "Brian Rodriguez" },
                    { pk: "pk.7", full_name: "Matthew Ramirez" },
                ])
            },
        },
    ],
}
