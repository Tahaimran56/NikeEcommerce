import { NextResponse } from 'next/server';
import products from '../../../../data/products.json';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Normalize the ID from the URL to match the slugified product name
  const normalizedId = id.toLowerCase().replace(/[\s']/g, "-");

  // Find the product based on the slugified name
  const product = products.find((item) =>
    item.productName.toLowerCase().replace(/[\s']/g, "-") === normalizedId
  );

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
