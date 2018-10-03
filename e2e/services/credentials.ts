import { EnvDataService } from './environment-data-service';

export enum CredentialTypes {
  VALID = 'valid',
  UNREGISTERED_USER = 'unregistered user',
  INVALID_EMAIL = 'invalid email',
}

export class Credentials {
  userName: string;
  password: string;

  constructor(creds: CredentialTypes) {
    switch (creds) {
      case CredentialTypes.VALID:
        this.userName = EnvDataService.getUserName();
        this.password = EnvDataService.getPassword();
        break;
      case CredentialTypes.UNREGISTERED_USER:
        this.userName = 'unregistered.user@gmail.com';
        this.password = 'doesntmatteruserisnotregistered';
        break;
      case CredentialTypes.INVALID_EMAIL:
        this.userName = 'registered.user';
        this.password = 'doesntmatterusernameisinvalid';
        break;
      default:
        throw new Error(`No valid credential type: ${creds}`);
    }
  }

  public getUserName(): string {
    return this.userName;
  }

  public getPassword(): string {
    return this.password;
  }
}
