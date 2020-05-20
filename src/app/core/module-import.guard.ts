//if we use lazy loading, it is possible to import module more than one instance of the service.so gouard aganist it

export function throwIfAlreadyLoaded(parentModule:any,moduleName:string){
  if(parentModule){
    throw new Error(`${moduleName} has already been loaded.Import core modules in th AppModule only.`)
  }
}
