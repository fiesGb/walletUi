import * as loadJsonFile from 'load-json-file';
import { EnvData } from '../config/env/env-data';

class EnvironmentDataService {
  private envData: EnvData;

  constructor() {
    this.envData = loadJsonFile.sync(`config/env/${process.env.ENV}.json`);
  }

  public getBaseUrl(): string {
    return this.envData.baseUrl;
  }

  public getPrivateApiUrl(): string {
    return this.envData.privateApiUrl;
  }

  public getUserName(): string {
    return this.envData.userName;
  }

  public getPassword(): string {
    return this.envData.password;
  }
}

export const EnvDataService = new EnvironmentDataService();
