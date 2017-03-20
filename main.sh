#!/bin/sh

node main logoGrammar.txt ../LogotacularIOS/LogotacularIOS/assets/parser/parser.js "LG.logoParser ="

node main sceneGrammar.txt ../SceneKitTest/js/convert/parser2.js "module.exports ="
