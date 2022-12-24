import { rest } from 'msw'

export const products = [
    { id: 1, name: "Html & CSS", price: 10.99, url: "/books.png" },
    { id: 2, name: "Stunning CSS", price: 19.99, url: "/html.png" },
    { id: 3, name: "Keyboard", price: 120, url: "/keyboard.png" },
    { id: 4, name: "MacBook Pro", price: 1200, url: "/mac.png" }
]

export const handlers = [
    rest.get('https://gotpop-simple-server.up.railway.app', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(products))
    })
]