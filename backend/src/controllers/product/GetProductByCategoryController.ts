import { Request, Response } from "express";
import { GetProductByCategoryService } from "../../services/product/GetProductByCategoryService";

class GetProductByCategoryController {
    async handle(req: Request, res: Response){

        const category_id = req.query.category_id as string;

        const getProductByCategoryService = new GetProductByCategoryService();

        const productByCategory = await getProductByCategoryService.execute({category_id});

        return res.json(productByCategory)

    }
}

export { GetProductByCategoryController }