import { HttpService } from "@nestjs/axios";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class LocationsService {
    constructor(
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    async getLocation() {
        const cachedData = await this.cacheManager.get('location');

        if (cachedData) {
          return cachedData;
        }    

        const response = await this.httpService.get('/iss-now.json').toPromise();
        const data = response.data;

        await this.cacheManager.set('location', data);
        return data;
    }
}