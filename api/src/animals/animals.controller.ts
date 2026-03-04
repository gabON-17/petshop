import type { Request, Response } from "express";
import type { AnimalsService } from "./animals.service.js";
import type { AnimalCreateDto } from "../dto/animalCreate.dto.js";
import type { AnimalEntity } from "../entitys/animals.entity.js";

export class AnimalsController {
    constructor(
        private readonly animalsService: AnimalsService
    ) {}


    findAll(req: Request, res: Response): void {
        const animals = this.animalsService.findAll();
        res
            .json({ message: 'OK', statusCode: 200, data: animals })
            .status(200);
    }

    findOne(req: Request, res: Response): void {
        const { name, id } = req.query;
        let animal: AnimalEntity | undefined;

        if (name) {
            animal = this.animalsService.findOne(name!)
        } else if (id) {
            animal = this.animalsService.findOne(undefined, id!)
        }

        res
            .json({ message: "OK", statusCode: 200, data: animal })
            .status(200)
    }

    create(req: Request, res: Response): void {
        const animal: AnimalCreateDto = req.body
        const animalCreate = this.animalsService.create(animal)

        res
            .json({ message: 'Create', statusCode: 201, data: animalCreate })
            .status(201);
    }
}