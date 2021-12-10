import bundle from "@nurdiansyah/rollup/configs/module.config";

export default [bundle(
  {
    input: "src/index.js",
    output: "index.js"
  }, {isModule: false}),
  bundle({
		input: "src/assert.js",
    output: "assert.js"
	}, {isModule: false}),
	bundle({
		input: "src/diff.js",
    output: "diff.js"
	}, {isModule: false}),
	bundle({
		input: "src/parse.js",
    output: "parse.js"
	}, {isModule: false})
];
