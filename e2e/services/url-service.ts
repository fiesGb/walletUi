import { EnvDataService } from './environment-data-service';

export class UrlService {

  public static getBaseUrl(): string {
    return EnvDataService.getBaseUrl();
  }

  public static getPrivateApiUrl(): string {
    return EnvDataService.getPrivateApiUrl();
  }
}
