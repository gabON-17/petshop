import express, { Router } from "express";
import { AnimalsRouter } from "./animals/animals.route.js";
import { AnimalsController } from "./animals/animals.controller.js";
import { AnimalsRepository } from "./repository/animals.repository.js";
import { AnimalsService } from "./animals/animals.service.js";

const app = express();
app.use(express.json());

const animalsRepository: AnimalsRepository = new AnimalsRepository();
const animalsService: AnimalsService = new AnimalsService(animalsRepository);
const animalsController: AnimalsController = new AnimalsController(animalsService);

const animalsRouter: AnimalsRouter = new AnimalsRouter(Router(), animalsController) 
animalsRouter.routing()

app.use('/animals', animalsRouter.getRouter)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})