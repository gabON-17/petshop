import type { Request, Response } from "express";
import type { AnimalsService } from "./animals.service.js";
import type { AnimalCreateDto } from "../dto/animalCreate.dto.js";

export class AnimalsController {
    constructor(
        private readonly animalsService: AnimalsService
    ) {}


    findAll(req: Request, res: Response) {
        const animals = this.animalsService.findAll();
        return res
            .json({ message: 'OK', statusCode: 200, data: animals })
            .status(200);
    }

    create(req: Request, res: Response) {
        const animal: AnimalCreateDto = req.body
        const animalCreate = this.animalsService.create(animal)

        return res
            .json({ message: 'Create', statusCode: 201, data: animalCreate })
            .status(201);
    }
}