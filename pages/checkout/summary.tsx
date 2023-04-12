import NextLink from 'next/link';

import { ShopLayout } from '@/components/layouts';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '../../components/ui/material';
import { CartList, OrderSummary } from '../../components/cart';


const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden' >
      <Typography variant='h1' component='h1' >Resumen de la orden</Typography>

      <Grid container>
        
        <Grid item xs={ 12 } sm={ 7 } >

          <CartList />

        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='sumary-card' >
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my:1 }} />

              <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Direccion de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
              
              <Typography>Hector Alvarez</Typography>
              <Typography>Calle direccion</Typography>
              <Typography>Municipio, zipcode</Typography>
              <Typography>Pais</Typography>
              <Typography>+1 2342525</Typography>

              <Divider sx={{ my:1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
              
              <OrderSummary />

              <Box sx={{ mt:3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Confirmar orden
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default SummaryPage