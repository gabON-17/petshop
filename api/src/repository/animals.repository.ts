import type { AnimalCreateDto } from "../dto/animalCreate.dto.js";
import type { AnimalEntity } from "../entitys/animals.entity.js";

export class AnimalsRepository {
    private id: number = 0;
    private animals: AnimalEntity[] = []

    create(animal: AnimalCreateDto): AnimalEntity {
        const animalComplet: AnimalEntity = {
            id: this.id,
            ...animal
        }
        this.animals.push(animalComplet);
        this.id++
        return animalComplet;
    }

    findAll(): AnimalEntity[] {
        return this.animals
    }

    findOne(name?: string | undefined, id?: number | undefined): AnimalEntity | undefined {
        let animal: AnimalEntity | undefined

        if (name) {
            animal = this.animals.find((value, index) => value.name = name)
        } else {
            animal = this.animals.find((value) => value.id = id!);
        }

        return animal
    }
}