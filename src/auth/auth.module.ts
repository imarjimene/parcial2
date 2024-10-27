import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Items, ItemsSchema } from 'src/items/schema/items.schema';
import { ItemsController } from 'src/items/items.controller';
import { ItemsService } from 'src/items/items.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './jwt.constants';

@Module({
  imports :[
   MongooseModule.forFeature([

     {
       name:Items.name,
       schema: ItemsSchema,
     },
   ]),
   JwtModule.register({
    secret:JwtConstants.secret,
    signOptions:{expiresIn:'20h'},
   })
  ],
 
 controllers: [ItemsController],
 providers: [ItemsService],
})
export class ItemsModule {}
