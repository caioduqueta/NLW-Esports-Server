import express from 'express';
const app = express();
//www.minhaapi.com/ - vai no get() - o que vem dps do "/"
app.get("/ads", (request, response) => {
    return response.json([
        { id: 1, name: 'anúncio 1' },
        { id: 2, name: 'anúncio 2' },
        { id: 3, name: 'anúncio 3' },
    ]);
});
app.listen(3333);
