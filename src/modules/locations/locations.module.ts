import { Module } from "@nestjs/common";
import { CustomHttpModule } from "src/services/http.module";
import { LocationsService } from "./locations.services";
import { LocationController } from "./locations.controller";

@Module({
    imports: [
        CustomHttpModule
    ],
    controllers: [LocationController],
    providers: [LocationsService]
})
export class LocationsModule {};