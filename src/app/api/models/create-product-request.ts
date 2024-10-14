// src/app/api/models/create-product-request.ts
export interface CreateProductRequest {
    name: string;       // Tên sản phẩm
    type: string;       // Loại sản phẩm
    quantity: number;   // Số lượng sản phẩm
    price: number;      // Giá sản phẩm
    image: File | null; // Hình ảnh sản phẩm, có thể là null nếu không có hình
  }
  