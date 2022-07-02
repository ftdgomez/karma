import {
  chakra,
  FormControl as ChakraFormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Select,
  Switch,
  Textarea,
  useConst,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

function generateRandomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

interface FormControlProps {
  label: string;
  type: 'text' | 'number' | 'textarea' | 'select' | 'switch' | 'date' | 'email';
  options?: Array<{
    value: string;
    label: string;
  }>;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  checker?: () => string | false;
  value?: string | number;
  helperText?: string;
  placeholder?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const FormInput = ({
  label,
  type,
  options,
  onChange,
  onBlur,
  checker = () => false,
  value,
  helperText,
  placeholder,
  children,
  disabled,
}: FormControlProps) => {
  const id = useConst(generateRandomId());

  const inputProps = {
    id,
    onChange,
    onBlur,
    value,
    placeholder: placeholder ? placeholder : label,
    disabled
  };

  return (
    <ChakraFormControl
      id={`${id}-form-control`}
      w="calc(100% - 32px)"
      rounded="md"
      mb={4}
    >
      <FormLabel fontWeight="light" htmlFor={id}>{label}</FormLabel>
      {type === 'textarea' && <Textarea {...inputProps} />}
      {type === 'text' && <Input {...inputProps} />}
      {type === 'number' && <Input type="number" {...inputProps} />}
      {type === 'email' && <Input type="email" {...inputProps} />}
      {type === 'switch' && (
        <Grid alignItems="center" templateColumns={children ? '1fr 120px' : '1fr'}>
          <Switch {...inputProps} />
          {children && children}
        </Grid>
      )}
      {type === 'date' && <Input type="date" {...inputProps} />}
      {type === 'select' && (
        <Select {...inputProps}>
          {options?.map((option: any) => (
            <option key={`kk-${option.value}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}
      <FormHelperText>
        {checker() ? (
          <chakra.span color="red.600" fontWeight="bold">
            {checker()}
          </chakra.span>
        ) : (
          <chakra.span>{helperText}</chakra.span>
        )}
      </FormHelperText>
    </ChakraFormControl>
  );
};
