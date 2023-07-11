import { useState } from "react";
import { Color } from "../resources/Color";
import { axiosManager } from "../axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducer/userSlice";

export interface iLoginInfo {
  id: string;
  password: string;
  name: string;
}

export default function SignIn() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loginInfo, setLogininfo] = useState<iLoginInfo>({
    id: "",
    password: "",
    name: "",
  });

  const signIn = async () => {
    try {
      return await axiosManager.post("/user/signin", {
        id: loginInfo.id,
        password: loginInfo.password,
      });
    } catch (e) {}
  };

  const register = async () => {
    try {
      return await axiosManager.post("/user/signup", {
        id: loginInfo.id,
        password: loginInfo.password,
        name: loginInfo.name,
      });
    } catch (e) {}
  };

  const onClickLogin = async (e: any) => {
    if (isLogin) {
      if (loginInfo.id.length === 0) {
        alert("아이디를 입력해 주세요");
      } else if (loginInfo.password.length === 0) {
        alert("패스워드를 입력해 주세요");
      } else {
        const result = await signIn();
        if (result) {
          const data = result.data;
          if (data.code === 404) {
            alert("로그인 실패, 계정 정보를 확인해 주세요.");
          } else if (data.code === 200) {
            nav("/");
            dispatch(loginUser(data.result));
          }
        }
      }
    } else {
      if (loginInfo.id.length === 0) {
        alert("아이디를 입력해 주세요");
      } else if (loginInfo.password.length === 0) {
        alert("패스워드를 입력해 주세요");
      } else if (loginInfo.name.length === 0) {
        alert("이름을 입력해 주세요");
      } else {
        const result = await register();
        if (result) {
          const data = result.data;
          if (data.code === 200) {
            alert("계정 등록에 성공하였습니다. 로그인 해주세요.");
            setIsLogin(true);
            setLogininfo({ id: "", password: "", name: "" });
          } else {
            alert("사용할 수 없는 아이디입니다. 다시 시도해주십시오.");
          }
        }
      }
    }
  };

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
            {isLogin && <span>로그인</span>}
            {!isLogin && <span>계정등록</span>}
          </div>
          <div
            style={{
              margin: "10px",
            }}
          >
            <input
              type="text"
              placeholder="id"
              value={loginInfo.id}
              onChange={(e) => {
                setLogininfo({ ...loginInfo, id: e.target.value });
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
          {!isLogin && (
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
          )}
          <div
            style={{
              display: "flex",
              margin: "10px",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button
              style={{
                background:
                  "linear-gradient(20deg,var(--color-primary), var(--color-secondary))",
                color: "white",
                width: "100%",
                height: "30px",
              }}
              onClick={onClickLogin}
            >
              {isLogin && <span>LogIn</span>}
              {!isLogin && <span>Register</span>}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              margin: "10px",
              justifyContent: "end",
              marginTop: "10px",
              fontSize: "12px",
              textDecoration: "underline",
              color: Color.Main,
            }}
          >
            <span
              onClick={(e) => {
                setIsLogin(!isLogin);
                setLogininfo({ id: "", password: "", name: "" });
              }}
              style={{
                cursor: "pointer",
              }}
            >
              {isLogin && "신규 계정 가입"}
              {!isLogin && "돌아가기"}
            </span>
          </div>
          <div
            style={{
              width: "95%",
              textAlign: "right",
              fontSize: "14px",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "var(--color-primary)",
                textDecoration: "underline",
              }}
            >
              계정 등록
            </span>
            {/** sign up */}
            <div>
              <div
                style={{
                  margin: "10px",
                }}
              >
                <input type="text" placeholder="id"></input>
              </div>
              <div
                style={{
                  margin: "10px",
                }}
              >
                <input type="text" placeholder="password"></input>
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "10px",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <button
                  style={{
                    background:
                      "linear-gradient(20deg,var(--color-primary), var(--color-secondary))",
                    color: "white",
                    width: "100%",
                  }}
                >
                  계정 등록
                </button>
              </div>
              <div
                style={{
                  width: "95%",
                  textAlign: "right",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    color: "var(--color-primary)",
                    textDecoration: "underline",
                  }}
                >
                  계정 등록
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
