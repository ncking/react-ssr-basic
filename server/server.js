import { createServer } from 'node:http'
import { extname } from 'node:path'
import { parse } from 'node:url'
import Ssr from './dist/ssr.js'
import layout from './layout.js'
const ENV_SERVER_PORT = 4001


const server = createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname = '', query } = parsedUrl
    const { method } = req
    const ext = extname(pathname)
    const args = { method, pathname, req, res, query }

    if (method !== 'GET') {
        return res.writeHead(405).end()
    }

    const ssr = Ssr(args)
    return res.writeHead(200).end(layout({ ssr }))

}).listen(ENV_SERVER_PORT, (err) => {
    if (err) throw err
    console.info(`Ready on http://localhost:${ENV_SERVER_PORT}`)
})
