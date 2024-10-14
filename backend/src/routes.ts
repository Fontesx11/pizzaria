import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategotyController";

import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./temp"))


//--ROTAS USER--
router.post("/users", new CreateUserController().handle)
router.post("/login", new AuthUserController().handle)
router.get("/me", isAuthenticated ,new DetailUserController().handle)

//--ROTAS CATEGORY--
router.post("/category", isAuthenticated, new CreateCategoryController().handle)
router.get("/category", isAuthenticated, new ListCategoryController().handle)

//--ROTAS PRODUCT--
router.post("/product", isAuthenticated, upload.single('file') ,new CreateProductController().handle)


export { router };