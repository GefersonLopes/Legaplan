import * as yup from "yup";

export const schema = yup.object().shape({
  taskTitle: yup
    .string()
    .required("Este campo é obrigatório")
    .min(5, "O minimo de caracteres aceitos é de 5")
    .max(25, "Somente é permitido o maximo de 25 caracteres"),
});
