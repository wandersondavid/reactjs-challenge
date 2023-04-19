import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Typography, useTheme } from "@mui/material"
import { Product } from "../../types/produts"
import { ExtendedWarranty } from "../ExtendedWarranty";



type Props = {
  onChange: (product: Product, type: string) => void;
  image: string;
  title: string;
  price: number;
  amount: number;
  id: number;
  extraWarranty?: number;
  onChangeWarranty: (id: number, value: number) => void;
}

export const ListProductCart = (props: Props) => {


  const handleChangeProduct = (product: any, type: string) => {
    props.onChange(product, type)
  }

  const handleChangeWarranty = (id: number, value: number) => {
    props.onChangeWarranty(id, value)
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '300px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      justifyContent: 'space-between'
    }}>

      <Box sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{
            width: '60px',
            height: '60px',
            aspectRatio: '4/4',
            padding: '20px',
            objectFit: 'contain'
          }}
          image={props.image}
          alt={props.title}
        />
        <CardContent sx={{ flex: '1 0 auto', width: `50%` }}>
          <Typography component="div" variant="h5" sx={{ fontSize: '1.25rem' }}>
            {props.title}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {(props.price * props.amount)}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Button onClick={() => handleChangeProduct(props, 'remove')} variant="contained" sx={{ width: '100%', marginTop: '20px', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            -
          </Button>

          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ margin: '0 10px', minWidth: '50px', textAlign: 'center' }}>
            {props.amount || 0}
          </Typography>
          <Button onClick={() => handleChangeProduct(props, 'add')} variant="contained" sx={{ width: '100%', marginTop: '20px', margin: 0 }}>
            +
          </Button>
        </Box>
      </Box>

      <Box>
        <ExtendedWarranty price={props.price} amount={props.amount} onChange={(value: number) => handleChangeWarranty(props.id, value)} />
      </Box>
    </Box>
  )
}