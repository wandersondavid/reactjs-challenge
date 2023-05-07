
import { Box, Typography } from "@mui/material";
import shopping from '../../assets/images/shopping.svg'
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export const Success = () => {

  return (
    <Box
      className=" flex justify-center items-center mt-36 flex-col"
    >
      <Typography  component="h3"
            variant="h5"
            className="h-16 font-bold line-clamp-3 text-zinc-800 text-lg">Compra concluida com sucesso!</Typography>
      <img
        height={300}
        width={300}
        className="object-contain"
        alt={'Sucesso'}
        src={shopping} />

      <Link to="/">
        <Button className="mt-3" variant="outlined">
          Comprar mais
        </Button>
      </Link>
    </Box>

  )

}