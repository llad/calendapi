import { Hono } from "hono"
import { serveStatic } from 'hono/serve-static.bun'
import * as dayjs from 'dayjs'


const port = parseInt(process.env.PORT) || 3000

const app = new Hono()

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))



app.get("/", (c) => {
  n  onst dateOne = new Date('2023-10-29')
  const dateTwo = new Date('2023-11-02')
c
  r ''
});

console.log(`Running at http://localhost:${port}`)

console.log('this')

export default {
  port,
  fetch: app.fetch
};
