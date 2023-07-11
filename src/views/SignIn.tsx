export default function SignIn() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "500px",
        }}
      >
        {/** login */}
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
              로그인
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
