import type { Request, Response, Router } from "express";
import type { AnimalsController } from "./animals.controller.js";

export class AnimalsRouter {
    constructor(
        private readonly router: Router,
        private readonly animalsController: AnimalsController
    ) {}

    routing(): void {
        this.router.get('/', (req, res) => {
            this.animalsController.findAll(req, res);
        })

        this.router.post('/', (req, res) => {
            this.animalsController.create(req, res);
        })
    }

    get getRouter(): Router {
        return this.router;
    }
}