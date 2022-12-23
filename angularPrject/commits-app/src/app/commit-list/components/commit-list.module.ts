import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommitListRoutingModule } from "./commit-list-routing.module";
import { CommitListComponent } from "./commit-list/commit-list.component";

@NgModule({
    declarations: [
        CommitListComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        CommitListRoutingModule
    ]
})
export class CommitListModule{}