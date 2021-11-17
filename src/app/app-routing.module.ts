import { NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./access/login/login.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ApartmentComponent } from "./pages/apartment/apartment.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";
import { RegisterProjectComponent } from "./access/project/project.component";
import { RegisterApartmentComponent } from "./access/apartment/apartment.component";

const routes: Routes = [
    //path: 'nombreen la url', componente: 'componente asociado', 
    {path: 'home', component: HomeComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'access', component: LoginComponent},
    {path: 'project/:id', component: ProjectComponent}, //con parametro
    {path: 'aparment/:id', component: ApartmentComponent}, //con parametro
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    //Admin
    {path: 'admin/regApartment', component: RegisterApartmentComponent},
    {path: 'admin/regProject', component: RegisterProjectComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}