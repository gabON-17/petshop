export class AnimalCreateDto {
    species: string;
    name: string;
    sex: 'M' | 'F';
    birth: Date
}