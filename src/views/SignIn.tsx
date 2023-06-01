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
                background: "linear-gradient(20deg, #CF90D6, #9A90D6)",
                color: "white",
                width: "100%",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
