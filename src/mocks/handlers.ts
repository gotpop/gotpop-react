import { rest } from 'msw'

export const posts = [
    {
        userId: 1,
        id: 1,
        title: 'liam first post title',
        body: 'first post body',
    },
    {
        userId: 2,
        id: 5,
        title: 'second post title',
        body: 'second post body',
    },
    {
        userId: 3,
        id: 6,
        title: 'third post title',
        body: 'third post body',
    },
]


export const posts2 = [
    { id: 1, name: "HTML & JS22", price: 10.99, url: "/books.png" },
    // { id: 2, name: "Stunning CSS", price: 19.99, url: "/html.png" },
    // { id: 3, name: "Keyboard", price: 120, url: "/keyboard.png" },
    // { id: 4, name: "MacBook Pro", price: 1200, url: "/mac.png" }
]

export const handlers = [
    rest.get('https://gotpop-simple-server.up.railway.app', (req, res, ctx) => {
        console.log('req :', req);
        return res(ctx.status(200), ctx.json(posts2))
    }),

    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts))
    }),
]