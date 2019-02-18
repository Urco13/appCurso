import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivagifComponent } from './ejdirectivagif/ejdirectivagif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdiretivangclassComponent } from './ejdiretivangclass/ejdiretivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { EjarrayobjetosComponent } from './ejarrayobjetos/ejarrayobjetos.component';
import { EjdirectivangsiwtchComponent } from './ejdirectivangsiwtch/ejdirectivangsiwtch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Fechaactual2Component } from './fechaactual2/fechaactual2.component';
import { Fechaactual3Component } from './fechaactual3/fechaactual3.component';
import { Fechaactual4Component } from './fechaactual4/fechaactual4.component';
import { Fechaactual5Component } from './fechaactual5/fechaactual5.component';
import { Fechaactual6Component } from './fechaactual6/fechaactual6.component';
import { EuroPipe } from './euro.pipe';
import { Fechaactual7Component } from './fechaactual7/fechaactual7.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivagifComponent,
    EjdirectivangstyleComponent,
    EjdiretivangclassComponent,
    EjdirectivangforComponent,
    EjarrayobjetosComponent,
    EjdirectivangsiwtchComponent,
    MenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent,
    Fechaactual2Component,
    Fechaactual3Component,
    Fechaactual4Component,
    Fechaactual5Component,
    Fechaactual6Component,
    EuroPipe,
    Fechaactual7Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
