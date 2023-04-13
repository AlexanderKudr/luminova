import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { FC, FormEventHandler, useCallback, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { authModalStyles } from "../../styles/modal";
import { ModalProps } from "./Modal.types";

type AuthData = {
  email: string;
  password: string;
  confirmation?: string;
};

type HookFormInputTextProps = {
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  control: Control<any, any>;
} & TextFieldProps;

const VALID_EMAIL =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const VALID_PASS = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const ERRORS = {
  PASS_NOT_VALID:
    "Must be at least 6 characters and include one number, one upper case, one lower case letter",
  PASS_NOT_CONFIRMED: "Passwords cannot be different",
  EMAIL_NOT_VALID: "Email is not valid",
};

const HookFormInputText: FC<HookFormInputTextProps> = ({ rules, control, name, ...rest }) => {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField {...rest} onChange={onChange} value={value} />
      )}
    ></Controller>
  );
};

export default function AuthModal({ handleClose, modalOpen }: ModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthData>({ mode: "onChange" });

  const getAdornment = useCallback(
    () => (
      <InputAdornment position="end">
        {" "}
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setIsPasswordOpen(!isPasswordOpen)}
          onMouseDown={() => setIsPasswordOpen(!isPasswordOpen)}
          edge="end"
        >
          {isPasswordOpen ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
    [isPasswordOpen]
  );

  const handleChangeForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmitForm: SubmitHandler<AuthData> = data => {
    console.log(data);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose} sx={authModalStyles.container}>
      <Box sx={authModalStyles.modalWrapper}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Box sx={authModalStyles.inputsWrapper}>
            <Typography
              align="center"
              sx={{ opacity: ".7", fontWeight: "bold" }}
              variant="h5"
              gutterBottom
            >
              {isLogin ? "Log in to Unsplash" : "Get account for free"}
            </Typography>
            <HookFormInputText
              label="Email"
              name="email"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              control={control}
              rules={{
                required: true,
                validate: val => {
                  if (!VALID_EMAIL.test(val)) return ERRORS.EMAIL_NOT_VALID;
                },
              }}
            />
            <HookFormInputText
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              label="Password"
              name="password"
              rules={{
                required: true,
                validate: val => {
                  if (!VALID_PASS.test(val)) return ERRORS.PASS_NOT_VALID;
                },
              }}
              type={isPasswordOpen ? "text" : "password"}
              control={control}
              InputProps={{ endAdornment: getAdornment() }}
            />

            {!isLogin && (
              <HookFormInputText
                error={!!errors.confirmation?.message}
                helperText={errors.confirmation?.message}
                rules={{
                  required: true,
                  validate: val => {
                    if (watch("password") !== val) return ERRORS.PASS_NOT_CONFIRMED;
                  },
                }}
                label="Confirm password"
                name="confirmation"
                type={isPasswordOpen ? "text" : "password"}
                control={control}
                InputProps={{ endAdornment: getAdornment() }}
              />
            )}
          </Box>
          <Button type="submit" disableRipple sx={authModalStyles.submitBtn}>
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
        </form>
        <Box sx={authModalStyles.modalFooter}>
          <Box>
            <Typography variant="body1">
              {isLogin ? "No account? " : "Already have an account? "}
              <Button
                sx={authModalStyles.changeModalBtn}
                disableRipple
                disableTouchRipple
                onClick={handleChangeForm}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </Button>
              {isLogin ? " for free" : " here"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
