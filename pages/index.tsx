
import { Typography } from '../components/ui/material';

import { ShopLayout } from '@/components/layouts';
import { initialData } from '@/database/products';
import { ProductList } from '@/components/products';


export default function Home() {
  return (
    <ShopLayout title={'Commer-Shop - Home'} pageDescription={'Fnd bests producst here'}>
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>

      <ProductList 
        products={ initialData.products as any}      
      />

    </ShopLayout>
  )
}
