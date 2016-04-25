/*
 * GET hoge response...
 */
import express = require("express");

export function hoge(req: express.Request, res: express.Response) {
    res.send('Hoge hoge...');
};