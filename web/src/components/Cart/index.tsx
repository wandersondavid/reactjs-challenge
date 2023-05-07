import { Box, CardContent, IconButton, Typography, Badge } from "@mui/material"
import React, { useEffect, useState } from "react";
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
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    if(window.scrollY > 100 && clientWindowHeight <= 100) {
      setClientWindowHeight(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Card className={clientWindowHeight <= 100 ? `  flex justify-between px-4 h-20 items-center` : "max-w-[100%] sticky top-0 flex justify-between px-4 h-20 items-center z-50"}>
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