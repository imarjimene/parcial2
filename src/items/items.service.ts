import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocumen } from './schema/items.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
 
@Injectable()
export class ItemsService {

  constructor(@InjectModel(Items.name) private itemsModule:Model<ItemsDocumen> ){
    {}

  }

  async create(createItemDto: CreateItemDto) {
   const itemCreated = await this.itemsModule.create(createItemDto)
    return itemCreated;
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
