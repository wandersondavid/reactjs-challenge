import { Box, Button, Card, Container, List, Typography, styled } from "@mui/material";
import { useShoppingCart } from "../../context/context";
import { ListProductCart } from "../../components/ListProductCart";
import { Product } from "../../types/produts";
import { formatMoney } from "../../utils/money";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";

type Select = {
  [key: string]: (product: Product) => void;
}

export const Cart = () => {
  const { cart, addProduct, removeProduct, extendedWarranty } = useShoppingCart();

  const [submit, setSubmit] = useState<Boolean>(false)

  const handleCart = (product: Product, type: string) => {
    const select: Select = {
      'add': addProduct,
      'remove': (product: Product) => removeProduct(product.id),
    }
    return select[type] && select[type](product);
  }



  const handleWarranty = (id: number, value: number) => {
    extendedWarranty(id, value)
  }

  const handleSubmitDataSales = () => {
    console.log('------------Cart------------')
    console.log(cart)
    console.log('------------Cart------------')
    // chamar para api
    setSubmit(true)
  }

  const sales = !!Object.entries(cart).length
    ? Object.entries(cart).reduce((acc, [_, value]) => {
      const extraWarranty = value.extraWarranty || 0
      return (acc + (value.price * value.amount) + extraWarranty)
    }, 0)
    : 0;

  return (
    <Container sx={{
      height: 'fit-content',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: '150px',
      padding: '16px',
      gap: '16px',
      '@media (max-width: 1000px)': {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        width: '100%',
      }

    }}>
      {!Object.entries(cart).length && <Box sx={{ width: '100%' }}>
        <Typography sx={{ width: '100%', textAlign: 'center' }}>Carrinho Vazio</Typography>
        <Link to="/">
          <Button variant="contained" sx={{ width: '100%', marginTop: '16px' }}>
            Continuar Comprando
          </Button>

        </Link>
      </Box>}
      {!!Object.entries(cart).length && <Box sx={{ width: '100%' }}>
        <Card sx={{
          width: '96%',
          padding: '16px',
          '@media (max-width: 1000px)': {
            width: 'initial',
          }
        }}>
          <Typography sx={{ width: '100%', textAlign: 'center' }}>Seus Produtos</Typography>

          {Object.entries(cart).map(([key, value]) => (
            <ListProductCart
              id={value.id}
              key={key}
              title={value.title}
              price={value.price}
              amount={value.amount}
              image={value.image}
              onChange={handleCart}
              onChangeWarranty={handleWarranty}
              extraWarranty={value.extraWarranty} />
          ))}
        </Card>
      </Box>
      }

      {!!Object.entries(cart).length && <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
        <Card sx={{
          width: '300px',
          padding: '8px',
          height: 'fit-content',
          '@media (max-width: 1000px)': {
            width: 'initial',
          }
        }}>
          <Typography sx={{ width: '100%', textAlign: 'center' }}>Resumo</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ width: '100%', textAlign: 'left' }}>Total:</Typography>
            <Typography sx={{ width: '100%', textAlign: 'right' }}> {formatMoney(sales, 'BRL')}</Typography>
          </Box>

          <Link to="/">
            <Button variant="contained" sx={{ width: '100%', marginTop: '16px' }}>
              Continuar Comprando
            </Button>

          </Link>
          <Button variant="contained" disabled={!Object.entries(cart).length} onClick={handleSubmitDataSales} sx={{ width: '100%', marginTop: '16px' }}>
            Finalizar Compra
          </Button>
        </Card>
      </Box>}

      {(submit && !!Object.entries(cart).length) && <Stack sx={{ width: '100%', position: 'absolute', bottom: `50px`, left: 0 }} spacing={2}>
        <Alert severity="success">Compra realizada com sucesso!, verifique o console!</Alert>
      </Stack>}
    </Container >
  )
}