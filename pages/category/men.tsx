import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { FullScreenLoading } from '@/components/ui';
import { Typography } from '@/components/ui/material';
import { useProducts } from '@/hooks';
import React from 'react'

const MenPage = () => {

  const { products, isLoading, isError } = useProducts('/products?gender=men')

  return (
    <ShopLayout title={'Products - Mens'} pageDescription={'Fnd bests men products here'}>
      <Typography variant='h1' component='h1'>Men</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Men products</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}
export default MenPage;