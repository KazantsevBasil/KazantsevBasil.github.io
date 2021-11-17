const uuid = _ => 'TOLKOTxxxxxx0000'.replace(/x|0/g, v => v === 'x'
? String.fromCharCode(Math.floor(Math.random() * 26) + 97)
: Math.floor(Math.random() * 10))
console.log(uuid());