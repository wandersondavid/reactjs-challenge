import { Box, Card, CardContent, IconButton, Typography } from "@mui/material"

import { ShoppingBasket } from "@mui/icons-material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom"
import { Cart as CartProps} from "../../types/produts"
import { formatMoney } from "../../utils/money"

type Props = {
  cart: CartProps;
}

export const Cart = ({cart}: Props ) => {

  return (
    <Card sx={{
      display: 'flex',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <CardContent sx={{ width: `200px`, display: 'flex', alignItems: 'center', backgroundColor: '#D2FEE1', borderRadius:'8px' }}>
        <IconButton >
          <ShoppingBasket sx={{color: '#055F5B'}} />
        </IconButton>

        <Typography component="div" variant="h5" sx={{ fontSize: '1.25rem', textAlign: 'center', width:'100%', fontWeight: 700 }}>
          {!!Object.keys(cart).length && formatMoney(Object.entries(cart).reduce((acc, [_, value]) => acc + value.amount * value.price, 0), 'BRL')}
          {!Object.keys(cart).length && formatMoney(0, 'BRL')}
        </Typography>
      </CardContent>
      <Box sx={{display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        <Link to={'/cart'} style={{color:'blue'}} >To Cart</Link>
        <IconButton >
          <ArrowForwardIosIcon sx={{color: '#055F5B'}} />
        </IconButton>
      </Box>

    </Card>
  )
}