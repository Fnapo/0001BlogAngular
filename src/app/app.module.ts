import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { LoginComponent } from './views/login/login.component';
import { EspejoPipe } from './shared/pipes/espejo/espejo.pipe';
import { CapPalabrasPipe } from './shared/pipes/capPalabras/cap-palabras.pipe';
import { FrontComponent } from './views/front/front.component';
import { CabeceraComponent } from './views/cabecera/cabecera.component';
import { PieComponent } from './views/pie/pie.component';
import { EntradaDetallesComponent } from './views/entrada-detalles/entrada-detalles.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        ListadoComponent,
        EntradaComponent,
        PaginaNoEncontradaComponent,
        AcercaDeNosotrosComponent,
        LoginComponent,
        EspejoPipe,
        CapPalabrasPipe,
        FrontComponent,
        CabeceraComponent,
        PieComponent,
        EntradaDetallesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
