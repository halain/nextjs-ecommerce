

import { FC } from 'react';

import { Box, IconButton, RemoveCircleOutline, Typography, AddCircleOutline } from './material';


interface Props {

}

export const ItemCounter:FC<Props> = () => {
  return (
    <Box display={'flex'} alignItems='center'>
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center'}}>1</Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
