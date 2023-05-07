import { Box, CardContent, IconButton, Typography, Badge } from "@mui/material"

import { ShoppingBasket } from "@mui/icons-material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom"
import { Cart as CartProps } from "../../types/produts"
import { formatMoney } from "../../utils/money"
import { Card } from "../Card";

type Props = {
  cart: CartProps;
}

export const Cart = ({ cart }: Props) => {

  const quantity = Object.entries(cart).reduce((acc, [_, value]) => acc + value.amount, 0)

  return (
    <Card className="flex justify-between px-4 h-20 items-center ">
      <Box className="flex">
        <Badge badgeContent={quantity} color="primary">
          <ShoppingBasket className="text-zinc-800 ml-1" />
        </Badge>
        <Typography component="span" variant="h5" className="text-center text-xl w-full font-bold pl-3">

          {!!Object.keys(cart).length &&
            formatMoney(Object.entries(cart).reduce((acc, [_, value]) => acc + value.amount * value.price, 0), 'BRL')
          }

          {!Object.keys(cart).length && formatMoney(0, 'BRL')}

        </Typography>
      </Box>

      {!!Object.keys(cart).length &&
        <Link to={'/cart'} className="flex items-center text-base text-zinc-800 border p-2 border-zinc-500 rounded-xl">
          <Typography className="hidden sm:flex" >Finalizar compra</Typography>
          <ArrowForwardIosIcon className="text-zinc-800 text-base" />
        </Link>
      }
    </Card>
  )
}