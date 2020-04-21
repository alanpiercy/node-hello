import * as express from 'express'
const app = express()
const PORT = 4000
const debug = console.log
/**
 * Get env
 * Returns environment settings and command line arguments
 */
function getEnv(){
    let [, , ...args] = process.argv;
    return {
        args: args,
        env: process.env,
    }
}
app.get('/', (req, res) => res.send(`<h3>Hello</h3> ${JSON.stringify(getEnv(), null, 2)}`))
app.listen(PORT, () => debug(`Example app listening at http://localhost:${PORT}`))