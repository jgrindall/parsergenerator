var fs = 				require("fs");
var peg = 				require("pegjs");
var grammarString = 	fs.readFileSync(process.argv[2], 'utf8');
var outFile = 			process.argv[3];
var prefix = 			process.argv[4];
var parser = 			peg.generate(grammarString, {"output":"source"});

fs.writeFileSync(outFile, prefix + " " + parser, 'utf8');