import { Column, Entity } from "typeorm";
import CommonEntity from "./common.entities";

@Entity()
export class Sujeet extends CommonEntity{
    @Column({
        name: "name",
    })
    name: string;
    @Column({
        name: "age",
    })
    age: number;
} 

// this is the entity which is used to store the data in the database