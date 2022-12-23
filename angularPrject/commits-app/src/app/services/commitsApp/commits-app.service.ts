import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommitsAppService {
  constructor(private http: HttpClient) {
    this.URL_API = environment.URL_APi;
  }
  public URL_API: string;

  getBranches(userName: string, repoName: string) {
    return this.http.get<any>(`${this.URL_API}/branches/${userName}/${repoName}`)
  }
  getCommitList(userName: string, repoName: string, branch: string) {
    return this.http.get<any>(`${this.URL_API}/commits/${userName}/${repoName}/${branch}`)
  }
}
