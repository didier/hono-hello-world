import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hono!'))
.get('/hello/:name', (c) => c.text(`Hello ${c.req.param('name')}!`))

export default app