import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { FullScreenLoading } from '@/components/ui';
import { Typography } from '@/components/ui/material';
import { useProducts } from '@/hooks';
import React from 'react'

const WomenPage = () => {

  const { products, isLoading, isError } = useProducts('/products?gender=women')

  return (
    <ShopLayout title={'Products - Womens'} pageDescription={'Fnd bests womens products here'}>
      <Typography variant='h1' component='h1'>Women</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Women products</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}
export default WomenPage;