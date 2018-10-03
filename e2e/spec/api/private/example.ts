import { UrlService } from '../../../services/url-service';
import { sendDeleteRequestWithToken, sendPostRequestWithToken } from '../calls';

export class Example {
  static async delete(): Promise<any> {
    return sendDeleteRequestWithToken(`${UrlService.getPrivateApiUrl()}`, {}, 'token');
  }

  static async post(value: string): Promise<any> {
    return sendPostRequestWithToken(
      `${UrlService.getPrivateApiUrl()}`,
      {
        property: value,
      },
      'token'
    );
  }
}
