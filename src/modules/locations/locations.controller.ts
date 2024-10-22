import { Controller, Get } from "@nestjs/common";
import { LocationsService } from "./locations.services";

@Controller('location') 
export class LocationController {
    constructor (private readonly locationsService: LocationsService) {}

    @Get('/')
    getLocation() {
        return this.locationsService.getLocation();
    }
}