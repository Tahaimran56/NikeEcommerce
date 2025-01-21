import { NextResponse } from 'next/server';
import products from "../../../data/products.json"; // Replace with the actual path to your product data

export async function GET() {
  return NextResponse.json({ data: products });
}
