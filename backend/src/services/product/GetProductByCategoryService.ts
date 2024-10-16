import prismaClient from "../../prisma"

interface GetByCategoryRequest{
    category_id: string
}

class GetProductByCategoryService {

    async execute({category_id}: GetByCategoryRequest){

        const products = prismaClient.product.findMany({
            where:{
                category_id:category_id,
            }
        })

        return products
    }
}

export { GetProductByCategoryService }