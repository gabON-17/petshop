import { PetDto } from 'src/dtos/pet.dto';
import { PetEntity } from 'src/entitys/pet.entity';
import { ErrorIntern } from 'src/types/errorIntern';

export class PetsRepository {
  private id: number;
  private pets: [PetEntity];

  createPet(pet: PetDto): PetEntity | ErrorIntern {
    const petComplet: PetEntity = {
      id: this.id,
      ...pet,
    };

    try {
      this.pets.push(petComplet);
    } catch (e) {
      return { error: 'Error ao criar o PET', status: 400 };
    }

    this.id++;
    return petComplet;
  }

  get getPets(): PetEntity[] {
    return this.pets;
  }
}
