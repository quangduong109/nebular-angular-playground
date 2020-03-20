import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule, NbMenuModule, NbTreeGridModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeuPageComponent } from './neu-page/neu-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { JupyterEmbedComponent } from './jupyter-embed/jupyter-embed.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { TreegridComponent } from './treegrid/treegrid.component';
import { ActiveroutetargetComponent } from './activeroutetarget/activeroutetarget.component';
import { TimepickerComponent } from './timepicker/timepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    NeuPageComponent,
    TablePageComponent,
    CardPageComponent,
    JupyterEmbedComponent,
    SidebarContentComponent,
    TreegridComponent,
    ActiveroutetargetComponent,
    TimepickerComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbTreeGridModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }