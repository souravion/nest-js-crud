import { 
    BadRequestException, 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpStatus, 
    Param, 
    Post, 
    Put, 
    Req, 
    Res, 
    UsePipes, 
    ValidationPipe 
} from '@nestjs/common';
import { UsersService } from 'src/users/service/users/users.service';
import { UserDto } from 'src/users/userDto/users.dto';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){ }

    
    @Get() 
    getUsers(@Res() res){
        const getUsers = this.userService.getUsers()
        if(getUsers){
            return res.status(HttpStatus.OK).json({
                message: 'User successfully Fetched!',
              });
        }
    }


    @Post('create') 
    @UsePipes(new ValidationPipe({ transform: true }))
    createUser(@Body() userData:UserDto, @Res() res) {
        const userCreated = this.userService.create(userData)
        if(userCreated){
            return res.status(HttpStatus.OK).json({
                message: 'User successfully created!',
              });
        }
    }

    @Get(':id') 
    async getUserById(@Param('id') id: string) : Promise<any> {
        return await this.userService.getUserById(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.userService.delete(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() post: any): Promise<any> {
      return await this.userService.update(id, post);
    }
  

}
