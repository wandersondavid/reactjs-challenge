import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography, useTheme } from "@mui/material"
import { Product } from "../../types/produts"

export const CardProduct = (props: Product) => {

  const theme = useTheme();
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 384, height: '100%',
      maxWidth: '384px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box'
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
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Rate ({props.rating.rate})
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Button variant="contained" sx={{ width: '100%', marginTop: '20px', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            +
          </Button>

          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ margin: '0 10px' }}>
            1
          </Typography>
          <Button variant="contained" sx={{ width: '100%', marginTop: '20px', margin: 0 }}>
            -
          </Button>
        </Box>
      </Box>

    </Card>
  )
}