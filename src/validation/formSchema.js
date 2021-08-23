import * as yup from 'yup';

const formSchema = yup.object().shape({
  size: yup
    .string()
    .oneOf(['small', 'medium','large']),
  sauce: yup
    .boolean()
     .oneOf(['red', 'ranch', 'bbq'], 'Sauce is required'),
  toppings: yup
    .boolean(),
})

export default formSchema


