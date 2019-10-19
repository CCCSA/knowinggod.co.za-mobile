import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadAssetTextService {

  constructor(private http: HttpClient) { }

  public asText(filepath: string): Promise<string>  {
    return new Promise((resolve, reject) => {
      this.http.get(filepath, { responseType: 'text' }).subscribe({
        next(code) {
          resolve(code);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
}
