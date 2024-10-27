import{ IsNotEmpty, IsNumber, isNumber, } from 'class-validator' ;
 
export class CreateItemDto {

@IsNotEmpty()
name: string;

@IsNumber()
price:number;

@IsNotEmpty()
Description:string
}