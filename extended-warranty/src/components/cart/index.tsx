import { Box, Card, CardContent, IconButton, Typography } from "@mui/material"

import { ShoppingBasket } from "@mui/icons-material"
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

      <CardContent sx={{ width: `100px`, display: 'flex', alignItems: 'center', backgroundColor: '#D2FEE1', borderRadius:'8px' }}>
        <IconButton >
          <ShoppingBasket />
        </IconButton>

        <Typography component="div" variant="h5" sx={{ fontSize: '1.25rem' }}>
          {!!Object.keys(cart).length && formatMoney(Object.entries(cart).reduce((acc, [_, value]) => acc + value.amount * value.price, 0), 'BRL')}
          {!Object.keys(cart).length && 0}
        </Typography>
      </CardContent>
      <Box>
        <Link to={'/cart'} style={{color:'#000'}} >Ir para carrinho</Link>
      </Box>

    </Card>
  )
}