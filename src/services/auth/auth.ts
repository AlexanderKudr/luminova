import { handleFetch, authEndpoints } from "@/utils";
import { NavigateFunction } from "react-router-dom";

type LoginProps = (
  payload: { email: string; password: string },
  navigate: NavigateFunction,
  setError: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;

type RegisterProps = (
  payload: { email: string; password: string; name: string },
  navigate: NavigateFunction,
  setError: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;

type RefreshProps = (navigate: NavigateFunction) => Promise<void>;
type LogoutProps = (token: string | null, navigate: NavigateFunction) => Promise<void>;
type Fetch = { [key: string]: string };

const reuseAuth = () => {
  const register: RegisterProps = async (payload, navigate, setError) => {
    const { email, password, name } = payload;
    try {
      const { error, accessToken, userName }: Fetch = await handleFetch(
        authEndpoints.register,
        "POST",
        { email, password, name }
      );

      console.log(error);
      if (error) {
        setError(error);
        return;
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", userName);

      navigate("/");
    } catch (error) {
      console.log(error, "error register");
    }
  };

  const login: LoginProps = async (payload, navigate, setError) => {
    const { email, password } = payload;
    try {
      const { error, accessToken, userName }: Fetch = await handleFetch(
        authEndpoints.login,
        "POST",
        { email, password }
      );

      if (error === "Invalid email or password") {
        setError(error);
        return;
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", userName);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAccessToken: RefreshProps = async (navigate) => {
    const { refresh } = authEndpoints;
    const name = localStorage.getItem("userName");

    const { error, accessToken, userName }: Fetch = await handleFetch(refresh, "POST", {
      userName: name,
    });

    if (error === "Refresh token missing") {
      navigate("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userName");
      return;
    }

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userName", userName);
  };

  const logoutUser: LogoutProps = async (token, navigate) => {
    try {
      const response = await handleFetch(
        authEndpoints.logout,
        "POST",
        {},
        { Authorization: `Bearer ${token}` }
      );
      console.log(response, "logout");
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userName");
    }
  };

  return {
    logoutUser,
    register,
    login,
    refreshAccessToken,
  };
};
export { reuseAuth };
