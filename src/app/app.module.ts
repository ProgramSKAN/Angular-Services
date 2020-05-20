import { PlainLoggerService } from './services/plain-logger.service';
import { DataService } from 'app/services/data.service';
import { LoggerService } from './services/logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { dataServiceFactory } from './services/data.service.factory';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // implementation of LoggerService can be changed easily by chaging th useclass
    //LoggerService,
    //{provide:LoggerService,useClass:LoggerService},//{provide:token,useclass:classToBeInstantiated} | token name should match constructor injected type (private logger:Loggerservice)
    //{provide:LoggerService,useClass:PlainLoggerService},

    //if the token is alredy registered then that can be used for other tokens using 'useExisting'
    // PlainLoggerService,
    // {provide:LoggerService,useExisting:PlainLoggerService},

    //useclass,useExisting uses 'new' keyword to instantate class.useVale is inline
    {provide:LoggerService,useValue:{
      log:(message)=>console.log(`useValue MESSAGE:${message}`),
      error:(message)=>console.log(`useValue ERROR:${message}`)
    }},

    //DataService
    {provide:DataService,useFactory:dataServiceFactory,deps:[LoggerService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
