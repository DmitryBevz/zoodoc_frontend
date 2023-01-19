import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { yupResolver } from "@hookform/resolvers/yup";
import { setLogin } from "../../../../redux/slices/auth/auth";
import { IUserLoginData } from "../../../../components/interfaces/auth/IAuth";
import { loginSchema } from "../../../../components/validation/schemas/auth/loginSchema";
import { closeModal, openModal } from "../../../../redux/slices/modal";
import { ModalType } from "../../../../redux/types/modal";

import { useStyles } from "./styles";
import { selectIsUser } from "../../../../redux/slices/user/selectors/userSelectors";

export const Login = () => {
  const styles = useStyles();
  const dispatch = useDispatch<any>();
  const isAuth = useSelector(selectIsUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserLoginData>({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values: IUserLoginData) => {
    const data = await dispatch(setLogin(values));
    if (!data.payload) {
      dispatch(
        openModal({
          type: ModalType.Error,
          payload: {
            errors: [{ msg: "Перевірте правильність введеної пошти та пароля" }],
          },
          onCancel: () => {
            dispatch(closeModal(ModalType.Error));
          },
        })
      );
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("zoodocToken", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Форма авторизації
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          className={styles.field}
          label="Пошта"
          error={Boolean(errors.login?.message)}
          helperText={errors.login?.message}
          {...register("login")}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          type="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password")}
          fullWidth
        />
        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          <Typography color="white">Увійти</Typography>
        </Button>
      </form>
    </Paper>
  );
};
