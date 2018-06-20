import express from 'express';

export const app = express();

app.get('/cong/:a/:b', (req, res) => {
    const { a, b } = req.params as { a: number, b: number };
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ success: false, message: 'INVALID_NUMBER_INPUT' });
    }
    res.send({ success: true, result: +a + +b })
});

app.listen(3000, () => console.log('Server started.'));
