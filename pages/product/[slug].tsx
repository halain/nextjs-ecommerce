import { NextPage , GetServerSideProps, GetStaticPaths, GetStaticProps} from 'next';
import React from 'react';
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Grid, Typography } from '../../components/ui/material';
import { Chip } from '@mui/material';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { IProduct } from '@/interfaces';
import { dbProducts } from '@/database';

// import { useProducts } from '@/hooks';
// import { useRouter } from 'next/router';



//Segundo approach *No usar*
interface Props {
  product: IProduct;
}



const ProductPage: NextPage<Props> = ({ product }) => {

  // Primera approach para obtener el producto con el SWR  *No usar*
  // const router = useRouter();
  // const { products: product, isLoading } = useProducts<IProduct>(`/products/${ router.query.slug }`);
  // if( isLoading ) {
  //   return <h1>Cargando...</h1>
  // }
  // if (!product) {
  //   return <h1>No existe el producto</h1>
  // } 



  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>

      <Grid container spacing={ 3 } >

        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSlideshow images={ product.images }  />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display={'flex'} flexDirection='column' >
            
            <Typography variant='h1' component={'h1'}>{ product.title }</Typography>
            <Typography variant='subtitle1' component={'h2'}>{ `$${product.price}` }</Typography>
            
            <Box sx={{ my: 2}}>
              <Typography variant='subtitle2' >Cantidad</Typography>
              <ItemCounter />
              <SizeSelector selectedSize={'XS'} sizes={ product.sizes } />
            </Box>
            
            {/* agregar al carrito */}
            <Button color='secondary' className='circular-btn'> 
              Agregar al carrito
            </Button>

            {/* <Chip label='No stock' color='error' variant='outlined'/> */}

            {/* description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Descripcion</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>
        
      </Grid>

    </ShopLayout>
  )
}



//Segundo approach para obtener el producto con SSR  *No usar*
// export const getServerSideProps: GetServerSideProps = async ({ params }
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { slug = '' } = ctx.params as { slug: string };
//   const product = await dbProducts.getProductBySlug( slug );
//   if (!product) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {
//       product
//     }
//   }
// }




//************  */ Tercer approach para obtener el producto con getStaticPaths y  *USAR este approach preferiblemente *
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productsSlugs = await dbProducts.getAllProductSlug();
  const paths = productsSlugs.map( product => ({
    params: {
      slug: product.slug
    }
  }));
  // console.log(paths);  
  // [
  //   { params: { slug: 'mens_chill_crew_neck_sweatshirt' } },
  //   { params: { slug: 'men_quilted_shirt_jacket' } },
  //   { params: { slug: 'men_raven_lightweight_zip_up_bomber_jacket' } },
  //   { params: { slug: 'men_turbine_long_sleeve_tee' } },
  // ]
  return {
    paths,
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug = '' } = ctx.params as { slug: string };

  const product = await dbProducts.getProductBySlug( slug );
  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}


export default ProductPage