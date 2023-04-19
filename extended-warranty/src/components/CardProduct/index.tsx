import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Typography, useTheme } from "@mui/material"
import { Cart, Product } from "../../types/produts"


type Props = {
  onChange: (product: Product, type: string) => void;
  cart: Cart;
} & Product;

export const CardProduct = (props: Props) => {

  const theme = useTheme();


  const handleChangeProduct = (product:Product, type: string) => {
    props.onChange(product, type )
  }

  return (
    <Card  key={props.id} sx={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 384, height: '100%',
      maxWidth: '384px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      justifyContent: 'space-between'
    }}>

      <Box sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{
            width: '130px',
            height: '150px',
            aspectRatio: '4/4',
            padding: '20px',
            objectFit: 'contain'
          }}
          image={props.image}
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: '1 0 auto', width: `50%` }}>
          <Typography component="div" variant="h5" sx={{ fontSize: '1.25rem' }}>
            {props.title}
          </Typography>
        </CardContent>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.price}
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Rating
              name="simple-controlled"
              value={props.rating.rate}
              color="secondary"
              readOnly
            />

            <Typography variant="subtitle1" color="text.secondary" component="div">
              ({props.rating.rate})
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Button onClick={()=>handleChangeProduct(props, 'remove')} variant="contained" sx={{ width: '100%', marginTop: '20px', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            -
          </Button>

          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ margin: '0 10px', minWidth: '50px', textAlign: 'center' }}>
            {props.cart[props.id]?.amount || 0}
          </Typography>
          <Button onClick={()=>handleChangeProduct(props, 'add')} variant="contained" sx={{ width: '100%', marginTop: '20px', margin: 0 }}>
            +
          </Button>
        </Box>
      </Box>

    </Card>
  )
}