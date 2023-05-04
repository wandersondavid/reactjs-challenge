import { Box, Container, Divider, Typography } from "@mui/material";
import { Card } from "../../components/Card"

import { useShoppingCart } from "../../context/context";
import { formatMoney } from "../../utils/money";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Buying = () => {
  const { cart } = useShoppingCart();

  const sales = !!Object.entries(cart).length
    ? Object.entries(cart).reduce((acc, [_, value]) => {
      return (acc + (value.price * value.amount))
    }, 0)
    : 0;

  const calulateExtendedWarranty = !!Object.entries(cart).length
    ? Object.entries(cart).reduce((acc, [_, value]) => {
      const extraWarranty = value.extraWarranty || 0
      return acc + extraWarranty;
    }, 0)
    : 0;

    const quantidadeTotal = Object.entries(cart).reduce((acc, [_, value]) => {
      return acc + value.amount;
    }, 0);

  return (
    <Container className="flex mt-40 gap-4 items-start">
      <Card className="p-4 w-full ">
        <h2 className="w-full text-center ">Seus Produtos</h2>
        <Box className="grid grid-cols-5 mt-4">
          <Typography
            component="h3"
            variant="h5"
            className="text-sm h-16 font-bold line-clamp-3">
            Produto
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            className="text-sm h-16 font-bold line-clamp-3">
            nome
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            className="text-sm h-16 font-bold line-clamp-3">
            Seguro
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            className="text-sm h-16 font-bold line-clamp-3">
            Valor
          </Typography>

          <Typography
            component="h3"
            variant="h5"
            className="text-sm h-16 font-bold line-clamp-3">
            Sub.Total
          </Typography>
        </Box>
        {Object.entries(cart).map(([_, value], index) => (
          <>
            <Box key={value.id} className="grid grid-cols-5">
              <img
                height={50}
                width={20}
                className="object-contain h-20 w-20"
                alt={value.title}
                src={value.images} />
              <Typography
                component="h3"
                variant="h5"
                className="text-sm  line-clamp-3">
                {value.title}
              </Typography>
              <Typography
                component="h3"
                variant="h5"
                className="text-sm w-60 h-16 line-clamp-3">
                {value?.extraWarranty ? formatMoney(value?.extraWarranty ?? 0, 'BRL') : 'Sem seguro'}
              </Typography>
              <Typography
                component="h3"
                variant="h5"
                className="text-sm w-60 h-16 line-clamp-3">
                {formatMoney(value.price, 'BRL')}
              </Typography>

              <Typography
                component="h3"
                variant="h5"
                className="text-sm w-60 h-16 line-clamp-3">
                {formatMoney(((value.price * value.amount) + (value?.extraWarranty ?? 0)), 'BRL')}
              </Typography>
            </Box>
            {Object.keys(cart).length - 1 !== index && <Divider className="my-4" />}
          </>
        ))
        }

      </Card >
      {!!Object.entries(cart).length &&
        <Card className="max-w-[100%] w-full p-4 lg:max-w-lg lg:w-[32rem] sticky top-4"  >
          <Typography className="w-full text-center">Resumo</Typography>
          <Box className="flex">
            <Typography className="w-full text-left">Total:</Typography>
            <Typography className="w-full text-right font-bold"> {formatMoney(sales, 'BRL')}</Typography>
          </Box>
          <Box className="flex">
            <Typography className="w-full text-left">Seguro:</Typography>
            <Typography className="w-full text-right font-bold"> {formatMoney(calulateExtendedWarranty, 'BRL')}</Typography>
          </Box>
          <Box className="flex">
            <Typography className="w-full text-left">Quantidade:</Typography>
            <Typography className="w-full text-right font-bold"> {quantidadeTotal} x</Typography>
          </Box>
          <Divider className="my-3" />
          <Box className="flex">
            <Typography className="w-full text-left">SubTotal:</Typography>
            <Typography className="w-full text-right font-bold"> {formatMoney(sales + calulateExtendedWarranty, 'BRL')}</Typography>
          </Box>

          <Link to="/cart">
            <Button className="mt-3" variant="outlined">
              Voltar
            </Button>
          </Link>
          <Button variant="contained" className="mt-3" disabled={!Object.entries(cart).length}>
            Finalizar Compra
          </Button>
        </Card>
      }
    </Container>
  )
}