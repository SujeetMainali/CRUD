import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

class CommonEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @CreateDateColumn({name: 'created_at'})
    createdAt! : Date

    @UpdateDateColumn({name:'updated_at'})
    updatedAt!: Date
}

export default CommonEntity;

// it is the common enitty in the application which is extended to all the entities in the application and consists all the common properties of the entities in the application like id, created_at, updated_at