import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Digite o seu nome completo'),
  destinationAddress: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Digite o seu e-mail'),
  dueDate: yup.string().required('Digite a data'),
  subject: yup.string().required('Digite o assunto'),
  body: yup.string().required('Digite a mensagem'),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);
