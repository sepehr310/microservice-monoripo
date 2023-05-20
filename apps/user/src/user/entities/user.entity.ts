import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    // @BeforeInsert()
    // hashPassword(){
    //     this.password=
    // }
}
