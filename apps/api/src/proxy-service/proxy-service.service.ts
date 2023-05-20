import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SignUpWithUserNameAndPasswordDto } from '../auth/dto/sign-up-with-username-and-password.dto';

@Injectable()
export class ProxyServiceService {
    constructor(
        @Inject('AUTH_SERVICE') private readonly client: ClientProxy) { }

    async createUserProxy(user: SignUpWithUserNameAndPasswordDto) {
        return await this.client.send('createUser', user)

    }
}
