import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Typography, useTheme } from "@mui/material"
import { Product } from "../../types/produts"
import { ExtendedWarranty } from "../ExtendedWarranty";
import { formatMoney } from "../../utils/money";



type Props = {
  onChange: (product: Product, type: string) => void;
  images: string;
  title: string;
  price: number;
  amount: number;
  id: number;
  extraWarranty?: number | null | undefined;
  children?: React.ReactNode;
  }

export const ListProductCart = (props: Props) => {


  const handleChangeProduct = (product: any, type: string) => {
    props.onChange(product, type)
  }

  const extraWarranty = props.extraWarranty || 0
  const price = (props.price * props.amount) + extraWarranty

  return (
    <Box className="w-full flex flex-col	 border p-2 border-zinc-200 rounded-xl">
      <Box className="flex-col items-center flex md:items-start md:justify-between md:flex-row">
        <Box
          className="h-18 flex justify-center items-center"
        >
          <img
            height={50}
            width={20}
            className="object-contain h-20 w-20"
            alt={props.title}
            src={props.images} />
        </Box>

        <Typography
          component="h3"
          variant="h5"
          className="text-sm w-60 h-16 font-bold line-clamp-3">
          {props.title}
        </Typography>

        <Box className="flex w-[160px] items-center flex-col" >
          <Box className="flex w-[160px] justify-between items-center">
            <Button onClick={() => handleChangeProduct(props, 'remove')} variant="outlined">
              -
            </Button>

            <Typography variant="subtitle1" color="text.secondary" component="span" className="w-20 text-center">
              {props.amount || 0}
            </Typography>
            <Button onClick={() => handleChangeProduct(props, 'add')} variant="outlined" >
              +
            </Button>
          </Box>
          <Typography onClick={() => handleChangeProduct(props, 'delete')}variant="subtitle1" color="text.secondary" component="span" className="text-center cursor-pointer hover:font-bold">
            Remover
          </Typography>
        </Box>

        <Typography className="text-sm font-bold text-center" variant="subtitle1" color="text.secondary" component="span">
          {formatMoney(price, 'BRL')}
        </Typography>
      </Box>

      {props.children}
    </Box>
  )
}