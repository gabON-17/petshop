import { especie } from 'src/types/pets';
import { servico } from 'src/types/servicos';

export class PetDto {
  pet: especie;
  sexo: 'M' | 'F';
  servicos: [servico];
  date: Date;
}
