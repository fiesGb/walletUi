import * as httpClient from 'supertest';
import { HttpMethod } from './http_method';

interface HttpConfig {
  method: HttpMethod;
  url: string;
  body?: any;
  token?: string;
}

export const sendGetRequest = async (url: string): Promise<any> => {
  return sendHttpRequest({ url, method: HttpMethod.GET });
};

export const sendGetRequestWithToken = async (url: string, token: string): Promise<any> => {
  return sendHttpRequest({ url, token, method: HttpMethod.GET });
};

export const sendPostRequest = async <T>(url: string, body: any): Promise<any> => {
  return sendHttpRequest({ url, body, method: HttpMethod.POST });
};

export const sendPostRequestWithToken = async (url: string, body: any, token: string): Promise<any> => {
  return sendHttpRequest({ url, body, token, method: HttpMethod.POST });
};

export const sendPostRequestWithFormData = async (url: string, data: any): Promise<any> => {
  const formData = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formData[key] = data[key];
    }
  }
  return httpClient(url).post('').type('form').send(formData);
};

export const sendPatchRequest = async (url: string, body: any): Promise<any> => {
  return sendHttpRequest({ url, body, method: HttpMethod.PATCH });
};

export const sendPatchRequestWithToken = async (url: string, body: any, token: string): Promise<any> => {
  return sendHttpRequest({ url, body, token, method: HttpMethod.PATCH });
};

export const sendDeleteRequest = async (url: string, body: any): Promise<any> => {
  return sendHttpRequest({ url, body, method: HttpMethod.DELETE });
};

export const sendDeleteRequestWithToken = async (url: string, body: any, token: string): Promise<any> => {
  return sendHttpRequest({ url, body, token, method: HttpMethod.DELETE });
};

const sendHttpRequest = async ({ method, url, body, token }: HttpConfig): Promise<any> => {
  let httpCall = httpClient(url);
  httpCall = httpCall[method]('');
  if (body) {
    httpCall = httpCall.send(body);
  }
  httpCall = httpCall
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
  if (token) {
    httpCall = httpCall.set('Authorization', token);
  }
  return httpCall;
};
