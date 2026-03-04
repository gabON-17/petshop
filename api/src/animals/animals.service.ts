import type { AnimalEntity } from "../entitys/animals.entity.js";
import type { AnimalsRepository } from "../repository/animals.repository.js";
import type { AnimalCreateDto } from "../dto/animalCreate.dto.js";

export class AnimalsService {
    constructor(
        private readonly animalsRepository: AnimalsRepository
    ) {}

    findAll(): AnimalEntity[] {
        const animals = this.animalsRepository.findAll();
        return animals;
    }

    findOne(name?: string, id?: number): AnimalEntity | undefined {
        let animal: AnimalEntity | undefined
        if (name) {
            animal = this.animalsRepository.findOne(name)
        } else if (id) {
            animal = this.animalsRepository.findOne(undefined, id)
        }
        
        if(animal) return animal;

        return undefined
    }

    create(animal: AnimalCreateDto) {
        const animalCreate = this.animalsRepository.create(animal);
        return animalCreate;
    }
}