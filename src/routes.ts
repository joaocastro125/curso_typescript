import {Request,Response} from 'express'
import createUser from './service/createUser'


export const helloword=(request:Request,response:Response)=>{
    const users=createUser({
        name:'',
        email:'joaocastro_125@hotmail.com',
        password:'1234',
        techs:[
            'Node',
            'React',
            'React Native',
        {title:'javacrit',experience:1000},
        
    ],
    })
    console.log(users.name)
    return response.json({message:"hello word"})
    
}