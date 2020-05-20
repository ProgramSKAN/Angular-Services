import { DataService } from 'app/services/data.service';
import { LoggerService } from './logger.service';

export function dataServiceFactory(logger:LoggerService) {
  let dataService:DataService=new DataService(logger);

  //write logic here to configure the service if necessary

  logger.log('creating the new data service from factory function');
  return dataService;
}
