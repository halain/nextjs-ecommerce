
import { Typography } from '../components/ui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { FullScreenLoading } from '@/components/ui';
import { useProducts } from '@/hooks';


export default function HomePage() {

  const {products, isLoading, isError} = useProducts('/products')  

  return (
    <ShopLayout title={'Commer-Shop - Home'} pageDescription={'Fnd bests products here'}>
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>

      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={ products } />
      }

      

    </ShopLayout>
  )
}
