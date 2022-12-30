const add = require ('./add')
const read = require ('./read')
const cmd = process.angv
// check for commands
if (cmd[2]=='read')
{
    console.log(read())
}
if(cmd[2]=='add')
{
    // build object
    const note = 
    {
        "id":cmd[3],
        "title":cmd[4],
        "boddy":cmd[5],
    }
    const oldNote = read()
    add (note,oldNote)
}