import { Box, CardContent, CardMedia, IconButton, Rating, Typography, useTheme } from "@mui/material"
import { Cart, Product } from "../../types/produts"
import { formatMoney } from "../../utils/money";
import { Button } from "../Button";
import { Card } from "../Card";


type Props = {
  onChange: (product: Product, type: string) => void;
  cart: Cart;
} & Product;

export const CardProduct = (props: Props) => {

  const handleChangeProduct = (product: Product, type: string) => {
    props.onChange(product, type)
  }

  return (
    <Card
      key={props.id}
      className="flex flex-col justify-start h-[32rem]"
    >

      <Box
        className="h-60 flex justify-center items-center"
      >
        <img
          height={200}
          width={20}
          className="object-contain h-48 w-[150px]"
          alt={props.title}
          src={props.images} />
      </Box>

      <Box className="p-2 w-full">
        <Typography
          component="h3"
          variant="h5"
          className="text-sm h-16 font-bold line-clamp-3">
          {props.title}
        </Typography>

        <Typography
          component="h3"
          variant="h5"
          className="text-sm line-clamp-2 ">
          {props.description}
        </Typography>
        <Box className="flex items-center">
          <Rating
            name="simple-controlled"
            value={props.rating.rate}
            color="secondary"
            className="text-sm"
            readOnly
          />

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="span"
            className="text-sm"
            >
            ({props.rating.rate})
          </Typography>
        </Box>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="h4"
          className="text-2xl font-bold my-4">
          {formatMoney(props.price, 'BRL')}
        </Typography>

        {!props.cart[props.id]?.amount &&
          <Button
            onClick={() => handleChangeProduct(props, 'add')}
            variant="outlined"
            className="font-bold"
          >
            Comprar
          </Button>
        }
        {!!props.cart[props.id]?.amount &&
          <Box className="flex w-full items-center">
            <Button
              onClick={() => handleChangeProduct(props, 'remove')}
              variant="outlined"
              className="font-bold"
            >
              -
            </Button>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className="w-20 text-center ">
              {props.cart[props.id]?.amount || 0}
            </Typography>
            <Button
              onClick={() => handleChangeProduct(props, 'add')}
              variant="outlined"
              className="font-bold"
            >
              +
            </Button>
          </Box>
        }
      </Box>
    </Card>
  )
}