import { Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { PetEntity } from 'src/entitys/pet.entity';
import { ServiceResponse } from 'src/types/serviceResponse';
import { PetDto } from 'src/dtos/pet.dto';

@Injectable()
export class PetsService {
  constructor(private readonly petsRepository: PetsRepository) {}

  findAll() {
    const pets: PetEntity[] = this.petsRepository.getPets;
    let response: ServiceResponse;

    if (pets.length == 0) {
      response = { message: 'Nenhum pet encontrado', data: [] };
      return response;
    }

    response = {
      message: 'Pets encontrados',
      data: { lenght: pets.length, pets: pets },
    };

    return response;
  }

  create(petDto: PetDto) {}
}
