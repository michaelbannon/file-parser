import { Router } from "express";

export function createRouter(cb: (router: Router) => void) {
    const router = Router();
    cb(router);
    return router;
}