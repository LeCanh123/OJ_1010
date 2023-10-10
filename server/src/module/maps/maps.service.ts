import { Inject, Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { Repository } from 'typeorm';
import { Map } from './entities/map.entity';

@Injectable()
export class MapsService {
  constructor(
    @Inject('MAPS_REPOSITORY')
    private mapRepository: Repository<Map>,
  ) {}



  async create(data:any) {
    try{

      let data1:any={
        name:data.name,
        locationx:data.locationx,
        locationy:data.locationy,
        block:"null",
        size:data.size,
        categorys:{id:data.CategoryId},
   
        }
      const categorys=await this.mapRepository.save(data1);
      console.log("ok");
      
    } 
    catch(err){ 

    }
    return 'This action adds a new map';
  }

  update(data) {
    return `This action updates a # map`;
  }

  remove(data) {
    return `This action removes a # map`;
  }

  async getAll() {

    try{

      let getAllMap= await this.mapRepository.find({where:{block:"null"},relations: ['categorys']})
      console.log("getAllMap",getAllMap);
      
      return {
        status:true,
        data:getAllMap
      }
    }
    catch(err){
console.log("err",err);

    }
    // return `This action removes a # map`;
  }

}
