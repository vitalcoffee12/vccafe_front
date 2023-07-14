import { useEffect, useState } from "react";
import { Color } from "../resources/Color";
import { axiosManager } from "../axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../reducers/slices/userSlice";
import { useSelector } from "react-redux";

export interface iLoginInfo {
  name: string;
  password: string;
}

export default function Login() {
  const user = useSelector((state: any) => state.user);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [loginInfo, setLogininfo] = useState<iLoginInfo>({
    name: "",
    password: "",
  });

  const login = async () => {
    try {
      return await axiosManager.post("/user/login", {
        name: loginInfo.name,
        password: loginInfo.password,
      });
    } catch (e) {}
  };

  const onClickLogin = async (e: any) => {
    if (loginInfo.name.length === 0) {
      alert("아이디를 입력해 주세요");
    } else if (loginInfo.password.length === 0) {
      alert("패스워드를 입력해 주세요");
    } else {
      const result = await login();
      console.log(result);
      if (result) {
        const data = result.data;
        if (data.code === 404) {
          alert("로그인 실패, 계정 정보를 확인해 주세요.");
        } else if (data.code === 200) {
          nav("/");
          dispatch(userLogin(data.body));
        }
      }
    }
  };

  useEffect(() => {
    if (user.name !== "") {
      nav("/");
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "550px",
        }}
      >
        {/** login */}
        <div>
          <div style={{ paddingLeft: "11px", color: Color.Main }}>
            <span>로그인</span>
          </div>
          <div
            style={{
              margin: "10px",
            }}
          >
            <input
              type="text"
              placeholder="name"
              value={loginInfo.name}
              onChange={(e) => {
                setLogininfo({ ...loginInfo, name: e.target.value });
              }}
            ></input>
          </div>
          <div
            style={{
              margin: "10px",
            }}
          >
            <input
              type="password"
              placeholder="password"
              value={loginInfo.password}
              onChange={(e) => {
                setLogininfo({ ...loginInfo, password: e.target.value });
              }}
            ></input>
          </div>
          <button
            style={{
              background:
                "linear-gradient(20deg,var(--color-primary), var(--color-secondary))",
              color: "white",
              marginLeft: "11px",
              width: "90%",
            }}
            onClick={onClickLogin}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
}
