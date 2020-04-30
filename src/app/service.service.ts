import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class DiagnosticCentre {
  constructor(
    public centreName:string,
    public centreId:String,
    public listOfTests:any,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }
     getCentres()
     {
       console.log("test call");
       return this.httpClient.get<DiagnosticCentre[]>("http://localhost:7873/DiagnosticCentre/find");
     }
  public deletecentre(centreId) {
    console.log(centreId);
    return this.httpClient.delete<DiagnosticCentre>("http://localhost:7872/DiagnosticCentre/delete/"+ centreId);
  }
  public createcentre(diagnosticCentre) {
    console.log(diagnosticCentre);
    return this.httpClient.post<DiagnosticCentre>("http://localhost:7871/DiagnosticCentre/create", diagnosticCentre);
  }
  
}