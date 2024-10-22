import { Module } from '@nestjs/common';
import { AstrosModule } from './modules/astros/astros.module';
import { CacheModule } from '@nestjs/cache-manager';
import { LocationsModule } from './modules/locations/locations.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5000,
      max: 10, 
      isGlobal: true,
    }),
    AstrosModule,
    LocationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
