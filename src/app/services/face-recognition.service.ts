import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaceRecognitionService {

  

  constructor(private httpClient: HttpClient) { }

  /**
   * This method calls detect method from the Server's API to get person's details.
   * Result returns in form JSON.
   * @param imageUrl string contains the url
   */
  findBy(imageUrl: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '537c14a153194e53ab70bf03fa4799c2'
    });

    return this.httpClient.post(`${environment.baseURL}detect?returnFaceAttributes=age,gender,smile,emotion,glasses,facialHair`,
                                {url: imageUrl}, {headers});
  }
}
