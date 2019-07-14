import { Controller,Post, Body,Get,Param,Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Post('import')
    importProduct(
        @Body('productId') productId: string,
        @Body('productName') productName: string,
        @Body('importCount') importCount: number,
        @Body('importDate') importDate: Date,
        @Body('exportCount') exportCount: number,
        @Body('exportDate') exportDate: Date,
        @Body('totalProduct')totalProduct: number,
        @Body('originalPrice')originalPrice: number,
        @Body('sellPrice')sellPrice: number,
        @Body('lastupdatedDate')lastupdatedDate: Date
    ) 
    {
        const generatedId = this.productsService.importProduct(productId,productName,importCount,importDate,exportCount,exportDate,totalProduct,originalPrice,sellPrice,lastupdatedDate)
        return {id: generatedId};
    }

    @Post('export')
    exportProduct(
        @Body('productId') productId: string,
        @Body('productName') productName: string,
        @Body('importCount') importCount: number,
        @Body('importDate') importDate: Date,
        @Body('exportCount') exportCount: number,
        @Body('exportDate') exportDate: Date,
        @Body('totalProduct')totalProduct: number,
        @Body('originalPrice')originalPrice: number,
        @Body('sellPrice')sellPrice: number,
        @Body('lastupdatedDate')lastupdatedDate: Date
    ) 
    {
        const generatedId = this.productsService.exportProduct(productId,productName,importCount,importDate,exportCount,exportDate,totalProduct,originalPrice,sellPrice,lastupdatedDate)
        return {id: generatedId};
    }

    @Get()
    getProducts(){
        return this.productsService.getAllProducts();
    }

    @Get(':productId')
    getProduct(@Param('productId') productId: string){
        return this.productsService.getSingleProduct(productId);
    }

    @Patch(':productId')
    updateProduct(
        @Param('productId') productId: string,
        @Body('productName') productName: string,
        @Body('importCount') importCount: number,
        @Body('exportCount') exportCount: number,
        @Body('totalProduct') totalProduct: number,
        @Body('originalPrice')originalPrice: number,
        @Body('sellPrice')sellPrice: number,
        @Body('lastupdatedDate')lastupdatedDate: Date
        ){
        this.productsService.updateProduct(productId,productName,importCount,exportCount,totalProduct,originalPrice,sellPrice,lastupdatedDate)
        return null
    }

    @Delete(':productId')
    removeProduct(@Param('productId') productId: string){
        this.productsService.deleteProduct(productId)
        return null;
    }
}