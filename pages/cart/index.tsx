import { ShopLayout } from '@/components/layouts';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '../../components/ui/material';
import { CartList, OrderSummary } from '../../components/cart';


const CartPage = () => {
  return (
    <ShopLayout title='Carrito - 3' pageDescription='Carrito de compra de la tienda' >
      <Typography variant='h1' component='h1' >Carrito</Typography>

      <Grid container>
        
        <Grid item xs={ 12 } sm={ 7 } >

          <CartList  editable/>

        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='sumary-card' >
            <CardContent>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{ my:1 }} />
              
              <OrderSummary />

              <Box sx={{ mt:3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Checkout
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default CartPage