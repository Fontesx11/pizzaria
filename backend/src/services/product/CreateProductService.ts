import prismaClient from "../../prisma";

interface ProductResquest{
    name: string,
    price: string,
    description: string,
    category_id: string,
    banner: string
}

class CreateProductService {
    async execute({name, price, description, category_id, banner}:ProductResquest){

        return{ok:"cesta"}
    }
}

export { CreateProductService }