
import { sayHi } from '@wisekingdom/message-util'
import { version } from '@wisekingdom/message-util/lib/about'
import express from 'express'

const port = process.env.PORT || 3030
const app = express()
app.use('*', (req: any, res: any) => {
    const name = req.query.name || 'Human'
    res.json({
        version: version(),
        message: sayHi(name)
    })
})
app.listen(port, () => {
    console.log(" > Ready http://localhost:"+port)
})