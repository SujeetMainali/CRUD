import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import roles  from "../constants/roles";
import  { User } from "./user.entity"

@Entity()
export class UserRoles {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        name: "role",
        type : 'enum',
        enum: roles,
        default: roles.client
    })
   role : roles;
    
   @OneToMany(()=>User, (user)=>user.roles,{cascade:true})
    users: User[]
}

