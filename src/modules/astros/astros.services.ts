import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { map } from "rxjs/operators";

@Injectable()
export class AstrosService {
    constructor(private readonly httpService: HttpService) {}

    async getAstros() {
        return this.httpService.get('/astros.json').pipe(
            map((response) => response.data),
        );
    }
}