const dataPath = "./db/events.json";
const fs = require("fs");
const { nanoid } = require("nanoid");
const { validationResult } = require("express-validator");

const createEvent = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errorsArr = []
        errors.array().forEach(element => errorsArr.push([element.param]))
        return res.status(400).json({ success: false, error: "Invalid request body params: " + errorsArr.toString() });
    }
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, error: "An error occurred while trying to access the database." });
        } else {
            const events = JSON.parse(data);
            const newEvent = { ...req.body };
            newEvent.id = nanoid();
            events.push({ ...newEvent });
            fs.writeFile(dataPath, JSON.stringify(events), (err) => {
                if (err) {
                    return res.status(500).json({ success: false, error: "An error occurred while trying to access the database." });
                }
                return res.status(200).json({ success: true, data: newEvent });
            })
        }
    })
}

module.exports = { createEvent }