
export class CartRepository{
    
    constructor(dao){
        this.dao = dao;
    }

    async addCart(){
        const result = await this.dao.post();
        return result;
    }

    async addProduct(idCart, idProduct, quantityBody){
        const result = await this.dao.addProduct(idCart, idProduct, quantityBody);
        return result;
    }

    async getCarts(){
        const result = await this.dao.get();
        return result;
    }

    async getCartById(cid){
        const result = await this.dao.getCart(cid);
        return result;
    }

    async getCartByIdPopulate(cid){
        const result = await this.dao.getCart(cid);
        return result;
    }

    async updateCart(cid, products){
        const result = await this.dao.put(cid, products);
        return result;
    }

    async updateProduct(cid, pid, quantity){
        const result = await this.dao.putProduct(cid, pid, quantity);
        return result;
    }
    
    async deleteCart(pid){
        const result = await this.dao.delete(pid);
        return result;
    }

    async deleteProductById(cid, pid){
        const result = await this.dao.deleteProduct(cid, pid);
        return result;
    }

}