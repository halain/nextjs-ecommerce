
import { GetServerSideProps, NextPage } from 'next';
import { Box, Typography } from '@/components/ui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
// import { FullScreenLoading } from '@/components/ui';
// import { useProducts } from '@/hooks';
import { dbProducts } from '@/database';
import { IProduct } from '@/interfaces';
import { getAllProducts } from '../../database/dbProducts';


interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {

  // const {products, isLoading, isError} = useProducts('/search/cybertruck')
  
  
  return (
    <ShopLayout title={'Commer-Shop - Search'} pageDescription={'Fnd bests products here'}>
      <Typography variant='h1' component='h1'>Buscar producto</Typography>
      
      {
        foundProducts 
        ? <Typography variant='h2' sx={{ mb: 1 }} textTransform={"capitalize"}>Termino: { query }</Typography>
        : (
          <Box display="flex">
            <Typography variant='h2' sx={{ mb: 1 }}>No se encontro ningun producto</Typography>
            <Typography variant='h2' sx={{ ml: 1 }} color="secondary" textTransform={"capitalize"} >{ query }</Typography>
          </Box>
        )
        
      }


      {
        // isLoading
        // ? <FullScreenLoading />
      <ProductList products={ products } />
      }

    </ShopLayout>
  )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const { query = '' } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  } 
  
  let  products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  //TODO: retornar productos similares si el de la busqueda no existe
  if (!foundProducts) {
    // products = await dbProducts.getAllProducts();
    products = await dbProducts.getProductsByTerm('kids');
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    }
  }
}

export default SearchPage;
