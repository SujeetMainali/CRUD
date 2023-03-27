import { Column, Entity } from "typeorm";
import CommonEntity from "./common.entities";

@Entity()
export class User extends CommonEntity {
    @Column({
        name: "first_name"
    })
    firstName: string;

    @Column({
        name: "middle_name",
        nullable: true
    })
    middleName?: string;

    @Column({
        name: "last_name"
    })
    lastName: string;

    @Column({
        name: "email",
        unique: true
    })
    email: string;

    @Column({
        name: "password",
    })
    password: string;

}

// this entity is used to store the information of the user in the database