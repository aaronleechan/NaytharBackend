export class Product{
    constructor(
        public productId: string,
        public productName: string, 
        public importCount: number, 
        public importDate: Date, 
        public exportCount: number, 
        public exportDate: Date, 
        public totalProduct: number, 
        public originalPrice: number,
        public sellPrice: number, 
        public lastupdatedDate: Date
        ){}
}