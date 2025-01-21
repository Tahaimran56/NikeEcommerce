import { NextResponse } from 'next/server';
import products from '@/data/products.json'; // Replace with the actual path to your product data

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find(
    (item) => item.productName.toLowerCase().replace(/\s/g, '-') === id
  );

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
