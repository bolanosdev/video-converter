const convert = require('media-converter');
const fs = require('fs')
const Path = require('path')

const inputName = 'input.mov'
const outputName = 'output.webm'
const inputFolder = Path.join(__dirname, 'input')
const outputFolder = Path.join(__dirname, 'output')

const input = Path.join(inputFolder, inputName)
const output = Path.join(outputFolder, outputName)

convert(input, output, null, true); 