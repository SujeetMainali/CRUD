import { Column, Entity, OneToOne, JoinColumn, ManyToMany, OneToMany, ManyToOne} from "typeorm";
import CommonEntity from "./common.entities";
import {UserRoles} from "./userRoles.entity";

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
    

   @ManyToOne(()=>UserRoles, (userRoles)=>userRoles.users)
   @JoinColumn({name:"user_role_id"})
    roles: UserRoles

}

// this entity is used to store the information of the user in the database