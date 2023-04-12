import NextLink from 'next/link';
import { ShopLayout } from '@/components/layouts';
import { Chip, Grid, Link, Typography } from '@/components/ui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre', width: 300 },  
  { field: 'paid', headerName: 'Pagada', description:'Si esta pagada la orden a no', width: 150,
    renderCell: ( params: GridRenderCellParams ) => (
                  params.row.paid
                  ? <Chip label='Pagada' variant='outlined' color='success' />
                  : <Chip label='Pending' variant='outlined' color='error' />
                )
  },  
  { field: 'orden', headerName: 'Ver Orden', width: 150,sortable: false, disableColumnMenu: true,
    renderCell: ( params: GridRenderCellParams ) => (
       <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
          <Link underline='always'>
            Ver orden
          </Link>
       </NextLink>

      
    )
  }
];

const rows: GridRowsProp = [
  { id: 1, paid: true, orden:'', fullName: 'Hector Alvarez'},
  { id: 2, paid: false, orden:'', fullName: 'Ximena Riofrio'},
  { id: 3, paid: true, orden:'', fullName: 'Nicolas Barzallo'},
  { id: 4, paid: false, orden:'', fullName: 'Leonel Alvarez'},
  { id: 5, paid: false, orden:'', fullName: 'Leyi Alvarez'},
  { id: 6, paid: true, orden:'', fullName: 'Lia Alvarez'},
];

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
      <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 550, width: '100%' }}>
          <DataGrid 
            rows={ rows }
            columns={ columns }
            initialState={{
              pagination: { 
                paginationModel: { pageSize: 5 } 
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            
          />
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default HistoryPage;