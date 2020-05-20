import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';
import { throwIfAlreadyLoaded } from './module-import.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LoggerService,DataService

    // implementation of LoggerService can be changed easily by chaging th useclass
    //LoggerService,
    //{provide:LoggerService,useClass:LoggerService},//{provide:token,useclass:classToBeInstantiated} | token name should match constructor injected type (private logger:Loggerservice)
    //{provide:LoggerService,useClass:PlainLoggerService},

    //if the token is alredy registered then that can be used for other tokens using 'useExisting'
    // PlainLoggerService,
    // {provide:LoggerService,useExisting:PlainLoggerService},

    //useclass,useExisting uses 'new' keyword to instantate class.useVale is inline
    // {provide:LoggerService,useValue:{
    //   log:(message)=>console.log(`useValue MESSAGE:${message}`),
    //   error:(message)=>console.log(`useValue ERROR:${message}`)
    // }},

    //DataService
    // {provide:DataService,useFactory:dataServiceFactory,deps:[LoggerService]}
  ],
  declarations: []
})
export class CoreModule{
  constructor(@Optional() @SkipSelf() parentModule:CoreModule ){
    throwIfAlreadyLoaded(parentModule,'CoreModule');
  }
}
//@Optional() @SkipSelf()> to check if it is properly chcking for the separate import of the CoreModule
//@SkipSelf()> tells the injection system to begin looking for an existing instance of the module in the paarent injector
//@Optional()> instructs the injector to pass a null if no other instance is found
