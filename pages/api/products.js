import dbConnect from '../../utils/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const products = await Product.find({});
    res.status(200).json(products);
  }
}
