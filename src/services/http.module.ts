import { HttpModule, HttpModuleOptions, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: (): HttpModuleOptions => ({
        baseURL: 'http://api.open-notify.org',
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
        },
        httpAgent: new (require('http')).Agent({ keepAlive: true }),
        httpsAgent: new (require('https')).Agent({ keepAlive: true }),
      }),
    }),
  ],
  exports: [HttpModule],
})
export class CustomHttpModule {}
