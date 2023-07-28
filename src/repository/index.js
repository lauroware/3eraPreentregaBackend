// import { UserRepository } from "./users.repository.js";
// import { contactsDao } from "../dao/factory.js"

// export const contactService = new UserRepository(contactsDao)

import { ProductRepository } from "./products.respository.js";
import ProductManager from "../Dao/managers/ProductManager.js";
import { CartRepository } from "./carts.respository.js";
import CartManager from "../Dao/managers/CartManager.js";

export const productService = new ProductRepository(new ProductManager());
export const cartService = new CartRepository(new CartManager());