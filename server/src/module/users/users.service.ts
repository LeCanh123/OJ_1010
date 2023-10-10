import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import MailService from 'src/services/mail';


@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}



  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }






  //admin

  //gửi email cho user
  async sendEmail(data){
  //lấy danh sách trong database

  

try{
  let getUserEmail=await this.userRepository.find();
  console.log("getUserEmail",getUserEmail);
  getUserEmail.map(async (item:any)=>{
  //gửi mail
  await MailService.sendMail({
    to: item.email,
    subject: "Thông Báo Thiên Tai",
    html: `<div>Có thiên tai ở vị trí x y</div>`
  })
  return



  })
  return {
    status:true,
    message:"Gửi tin nhắn thành công"
  }

}
catch(err){
  return {
    status:false,
    message:"Gửi tin nhắn thất bại"
  }
}


  }









  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
