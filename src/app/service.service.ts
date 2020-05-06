import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class DiagnosticCentre {
  constructor(
    public centreName: string,
    public centreId: string,
    public listOfTests: any,
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  getCentres() {
    return this.httpClient.get<DiagnosticCentre[]>("http://localhost:7873/DiagnosticCentre/find");
  }
  public deletecentre(centreId) {
    return this.httpClient.delete<DiagnosticCentre>("http://localhost:7872/DiagnosticCentre/delete/" + centreId);
  }
  public createcentre(diagnosticCentre) {
    return this.httpClient.post<any>("http://localhost:7871/DiagnosticCentre/create", diagnosticCentre);
  }

}