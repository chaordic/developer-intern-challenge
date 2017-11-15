import { UrlInterface } from './url.interface';

export interface PaginatedResponse {
  data: UrlInterface[];
  meta: object;
}
