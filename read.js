const fs = require ('fs')
const read = function ()
{
    return fs.readFileSync ('./note.txt','utfs')
}
module.exparts = read