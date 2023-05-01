import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { FullScreenLoading } from '@/components/ui';
import { Typography } from '@/components/ui/material';
import { useProducts } from '@/hooks';
import React from 'react'

const KidPage = () => {

  const { products, isLoading, isError } = useProducts('/products/?gender=kid')

  return (
    <ShopLayout title={'Products - Kids'} pageDescription={'Fnd bests kids products here'}>
      <Typography variant='h1' component='h1'>Kids</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Kids products</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}
export default KidPage;