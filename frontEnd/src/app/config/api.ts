import {environment} from 'src/environments/environment'
export const baseUrl = environment.production ? 'https://ApiFromServerProd.com' : 'http://localhost:8080/api'
export const productsUrl = baseUrl + '/products';
export const authUrl = baseUrl + '/auth/';
export const userUrl = baseUrl + '/test/';
