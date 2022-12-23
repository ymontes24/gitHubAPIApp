import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommitListComponent } from "./commit-list/commit-list.component";

const routes: Routes=[
    {
        path:'',
        component: CommitListComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})

export class CommitListRoutingModule{}