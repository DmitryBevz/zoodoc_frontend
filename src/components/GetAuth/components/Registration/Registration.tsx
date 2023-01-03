import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

import { setRegister } from "../../../../redux/slices/auth";
import { selectIsAuth } from "../../../../redux/slices/selectors/authSelectors";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../../validation/schemas/auth/registrationSchema";
import { IUserRegisterData } from "../../../interfaces/auth/IAuth";
import { useToast } from "../../../../hooks/useToast";

import { useStyles } from "./styles";

export const Registration = () => {
  const dispatch = useDispatch<any>();
  const styles = useStyles();
  const isAuth = useSelector(selectIsAuth);
  const [role, setRole] = React.useState(1);
  const notify = useToast();

  const handleChangeRole = (event: React.SyntheticEvent, newValue: number) => {
    setRole(newValue);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserRegisterData>({
    defaultValues: {
      role: role,
      userName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(registrationSchema),
  });

  console.log(errors);

  const onSubmit = async (values: IUserRegisterData) => {
    const data = await dispatch(setRegister({ ...values, role }));

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
        Форма реєстрації
      </Typography>
      <Box className={styles.form}>
        <Box className={styles.avatar}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </Box>
        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <Box className={styles.roleBlock}>
            <Tabs value={role} onChange={handleChangeRole}>
              <Tab
                icon={<MedicalServicesOutlinedIcon />}
                label="ЛІКАР"
                {...register("role")}
              />
              <Tab
                icon={<PetsOutlinedIcon />}
                label="ПАЦІЄНТ"
                {...register("role")}
              />
            </Tabs>
          </Box>
          <TextField
            label="Ім'я"
            fullWidth
            error={!!errors.userName?.message}
            helperText={errors.userName?.message}
            {...register("userName")}
          />
          <TextField
            label="Прізвище"
            fullWidth
            error={!!errors.lastName?.message}
            helperText={errors.lastName?.message}
            {...register("lastName")}
          />
          <TextField
            label="Телефон"
            fullWidth
            error={!!errors.phoneNumber?.message}
            helperText={errors.phoneNumber?.message}
            {...register("phoneNumber")}
          />
          <TextField
            label="Пошта"
            fullWidth
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            style={{ zIndex: 0 }}
            label="Пароль"
            type="password"
            fullWidth
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <Button
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            <Typography color="white">Створити акаунт</Typography>
          </Button>
        </form>
      </Box>
    </Paper>
  );
};
