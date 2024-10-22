import { Module } from "@nestjs/common";
import { AstrosService } from "./astros.services";
import { AstrosController } from "./astros.controller";
import { CustomHttpModule } from "src/services/http.module";

@Module({
    imports: [CustomHttpModule],
    controllers: [AstrosController],
    providers: [AstrosService]
})
export class AstrosModule {};