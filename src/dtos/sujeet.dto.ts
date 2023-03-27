import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class SujeetDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    // @isNotEmpty()
    @IsNumber()
    age: number;
    }