import prismaClient from "../../prisma"
import { compare } from "bcrypt"
import { sign } from 'jsonwebtoken'

interface AuthUserResquest{
    email: string,
    password: string,
}


class AuthUserService {
    async execute({email, password}: AuthUserResquest){

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Email or Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email or Password incorrect")
        }

        const token =  sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET_KEY,
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }