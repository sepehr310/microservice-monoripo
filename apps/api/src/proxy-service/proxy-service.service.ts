import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SignUpWithUserNameAndPasswordDto } from '../auth/dto/sign-up-with-username-and-password.dto';

@Injectable()
export class ProxyServiceService {
    constructor(
        @Inject('AUTH_SERVICE') private readonly client: ClientProxy) { }

     createUserProxy(user: SignUpWithUserNameAndPasswordDto) {

        return new Promise((resolve,reject)=>{
            this.client.send('createUser', user).subscribe(result=>{
                resolve(result)
            },(err)=>{
                reject(err)
            })

        })
        

    }

    GetUserByNameProxy(name: string) {

        return new Promise((resolve,reject)=>{
            this.client.send('findUserByUserName', name).subscribe(result=>{
                resolve(result)
            },(err)=>{
                reject(err)
            })

        })
        

    }
}
