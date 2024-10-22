import { Controller, Get } from "@nestjs/common";
import { AstrosService } from "./astros.services";

@Controller('astros')
export class AstrosController {
    constructor (private readonly astrosService: AstrosService) {}

    @Get('/')
    getAstros() {
        return this.astrosService.getAstros();
    }
}