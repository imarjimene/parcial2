import{Prop ,Schema ,SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

//todo el schema de los items (coleccion)'
export type ItemsDocumen = Items &Document;

@Schema()
export class Items{
    @Prop()
    name:string;

    @Prop()
    price:number;

    @Prop()
    description:string


}

export const ItemsSchema = SchemaFactory.createForClass(Items);