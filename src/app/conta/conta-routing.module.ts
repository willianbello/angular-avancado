import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContaAppComponent } from "./conta.app.component";
import { LoginComponent } from "./login/login.component";

const contaRouterConfig: Routes = [
    {
        path: '',
        component: ContaAppComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'cadastro', component: CadastroComponent },
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(contaRouterConfig),
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule {}