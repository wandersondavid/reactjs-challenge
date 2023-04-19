import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { formatMoney } from '../../utils/money';

const marks = [
  {
    value: 25,
    label: 'Sem garantia',
  },
  {
    value: 50,
    label: '1 ano',
  },
  {
    value: 75,
    label: '2 anos',
  },
  {
    value: 100,
    label: '3 anos',
  },
];

type Props = {
  price: number;
  amount: number;
  onChange: (value: number) => void;
}

type Select = {
  [key: number]: (price: number, amount: number) => number;
}

export const ExtendedWarranty = (props: Props) => {

  const [value, setValue] = React.useState<number>(25);

  const [warranty, setWarranty] = React.useState<number>(0);

  const valuetext = (value: number) => {
    setValue(value);
    if (value === 25) return 'Sem garantiad';

    return `${value} +  ano${value > 1 ? 's' : ''}`;
  }

  const valueLabelFormat = (value: number) => {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const calculateWarranty = (value: number, price: number, amount: number) => {
    const calculate: Select = {
      50: (price: number, amount: number) => (price + (price * 0.1) * amount) / 3,
      75: (price: number, amount: number) => (price + (price * 0.2) * amount) / 3,
      100: (price: number, amount: number) => (price + (price * 0.3) * amount) / 3,
    }

    const calculateWarranty = calculate[value] && +calculate[value](price, amount);
    setWarranty(calculateWarranty ?? 0)
    props.onChange(calculateWarranty ?? 0)

    return calculateWarranty;
  }

  React.useEffect(() => {
    calculateWarranty(value, props.price, props.amount)
  }, [value])

  return (
    <>
      <Typography variant='h3' sx={{fontSize: '1.2rem', fontWeight: 400}}>Garantia Estendida</Typography>
      <Typography>Voce pode estender o tempo de garantia deste produto</Typography>
      <Box sx={{ maxWidth: 400, width: '100%' }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={25}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          marks={marks}
        />
      </Box>

      {value != 25 &&
        <Typography>Por {formatMoney(warranty, 'BRL')} a mais no valor do produto</Typography>
      }
    </>
  )
}
