import { AfterInsert, BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as Bcrypt from 'bcrypt';


@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ unique: true })
    userName: string;

    @Column()
    password:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @BeforeInsert()
    async hashPassword(){
        const salt = await Bcrypt.genSalt();

        this.password=await Bcrypt.hash(this.password, salt);
    }

    @AfterInsert()
    afterSave(){
        this.password = undefined;
    }
}
