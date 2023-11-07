import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'mamad',
      email: 'mamad@mamad.com',
    },
    {
      username: 'mamad2',
      email: 'mamad2',
    },
    {
      username: 'jafar',
      email: 'jafari 2',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetail: CreateUserType) {
    this.fakeUsers.push(userDetail);
    return;
  }

  fetchUserById(id: number) {
    if (id == 1) {
      return { id, username: 'Anson', email: 'hashem@mamad.com' };
    }
    return null;
  }
}
