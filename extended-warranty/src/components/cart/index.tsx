import { Box, Card, CardContent, IconButton, Typography } from "@mui/material"

import { ShoppingBasket } from "@mui/icons-material"
import { Link } from "react-router-dom"

export const Cart = () => {

  return (
    <Card sx={{
      display: 'flex',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <CardContent sx={{ width: `100px`, display: 'flex', alignItems: 'center', backgroundColor: '#D2FEE1', borderRadius:'8px' }}>
        <IconButton >
          <ShoppingBasket />
        </IconButton>

        <Typography component="div" variant="h5" sx={{ fontSize: '1.25rem' }}>
          00.00
        </Typography>
      </CardContent>
      <Box>
        <Link to={'/shop'} style={{color:'#000'}} >Ir para carrinho</Link>
      </Box>

    </Card>
  )
}