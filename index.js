const fs = require("fs");
var flatten = require("flat");
var unflatten = require("flat").unflatten;

let langs = ["de", "en", "es", "fr", "nl"];

const convert = (lang) => {
  let raw = fs.readFileSync(`./old/${lang}.json`, "utf8");
  let oldJson = JSON.parse(raw);

  let flat = flatten(oldJson);
  let unflat = unflatten(flat, { object: true });
  let newJsonText = JSON.stringify(unflat);

  fs.writeFileSync(`./new/${lang}.json`, newJsonText);
};

langs.map((l) => convert(l));
