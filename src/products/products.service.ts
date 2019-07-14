import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';

@Injectable()
export class ProductsService{
    products: Product[] = [];

    importProduct(
        productId: string,
        productName: string, 
        importCount: number,
        importDate: Date, 
        exportCount: number,
        exportDate: Date, 
        totalProduct: number,
        originalPrice: number,
        sellPrice: number,
        lastupdatedDate: Date
        )
        {
        importDate = new Date();
        lastupdatedDate = new Date();
        const newProduct = new Product(productId,productName,importCount,importDate,exportCount,exportDate,totalProduct,originalPrice,sellPrice,lastupdatedDate);
        this.products.push(newProduct);
        return productId
    }

    exportProduct(
        productId: string,
        productName: string, 
        importCount: number,
        importDate: Date, 
        exportCount: number,
        exportDate: Date, 
        totalProduct: number,
        originalPrice: number,
        sellPrice: number,
        lastupdatedDate: Date
        )
        {
        exportDate = new Date();
        lastupdatedDate = new Date()
        const newProduct = new Product(productId,productName,importCount,importDate,exportCount,exportDate,totalProduct,originalPrice,sellPrice,lastupdatedDate);
        this.products.push(newProduct);
        return productId
    }

    getAllProducts(){
        return [...this.products]
    }

    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(
        productId: string,
        productName: string, 
        importCount: number,
        exportCount: number,
        totalProduct: number,
        originalPrice: number,
        sellPrice: number,
        lastupdatedDate: Date
    ){
        const [product, index] = this.findProduct(productId)
        const updatedProduct = {...product};
        if(productName){updatedProduct.productName = productName}
        if(importCount){updatedProduct.importCount = importCount}
        if(exportCount){updatedProduct.exportCount = exportCount}
        if(totalProduct){updatedProduct.totalProduct = totalProduct}
        if(originalPrice){updatedProduct.originalPrice = originalPrice}
        if(sellPrice){updatedProduct.sellPrice = sellPrice}
        lastupdatedDate = new Date()
        this.products[index] = updatedProduct
    }

    deleteProduct(productId: string){
        const index = this.findProduct(productId)[1];
        this.products.splice(index,1);
    }

    private findProduct(productId: string): [Product,number]{
        const productIndex = this.products.findIndex(prod=>prod.productId === productId)
        const product = this.products[productIndex];
        if (!product){
            throw new NotFoundException();
        }
        return [product,productIndex]
    }

}

