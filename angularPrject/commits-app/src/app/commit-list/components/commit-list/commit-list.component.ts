import { Component, OnInit } from '@angular/core';
import { CommitsAppService } from 'src/app/services/commitsApp/commits-app.service';
@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  userName: string = 'ymontes24';
  repoName: string = 'gitHubAPIApp';
  isVisible = false;
  isVisibleError = false;
  branches: any = [];
  branchSelected: string = '';
  commits: any = [];

  constructor(private _commitsAppService: CommitsAppService) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.branches = [];
    this._commitsAppService
      .getBranches(form.value.userName, form.value.repoName)
      .subscribe(
        (res) => {
          res.forEach((element: any) => {
            this.branches.push(element.name);
          });
          this.userName = form.value.userName;
          this.repoName = form.value.repoName;
          this.isVisibleError = false;
          this.isVisible = true;
        },
        (err) => {
          this.isVisibleError = true;
          this.isVisible = false;
        }
      );
  }

  onSubmitCommits(form: any) {
    this._commitsAppService
      .getCommitList(this.userName, this.repoName, this.branchSelected)
      .subscribe(
        (res) => {
          this.commits = res;
        },
        (err) => {
          this.isVisibleError = true;
          this.isVisible = false;
        }
      );
  }

  reloadPage() {
    location.reload();
  }
}
