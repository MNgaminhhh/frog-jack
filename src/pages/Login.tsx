import backgroundImage from "../assets/loginBg.png";
import starBanner from "../assets/starBanner.png";
import cardsBanner from "../assets/cardsBanner.png";
import signinButtonBg from "../assets/signinButtonBg.png";
export default function Login({ openMdk }: { openMdk: () => void }) {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) no-repeat center center/cover`,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
        padding: "0 20px",
      }}
    >
      <div className="header">
        <h1
          style={{
            color: "#84491C",
            fontFamily: "pixelmix",
            fontSize: "64px",
            lineHeight: "68px",
            textAlign: "center",
            width: "80%",
            margin: "0 auto",
          }}
        >
          Black Jack
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "240px",
        }}
        className="banners-container relative"
      >
        <img
          style={{
            position: "absolute",
            left: "50%",
            width: "198px",
            zIndex: 2,
          }}
          src={starBanner}
          alt="star banner"
        />
        <img
          style={{
            width: "214px",
            position: "absolute",
            top: "64%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            margin: "0 auto",
          }}
          src={cardsBanner}
          alt="cards banner"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="button-container"
      >
        <button
          style={{
            background: `url(${signinButtonBg}) no-repeat center center/contain`,
            color: "white",
            fontFamily: "pixelmix",
            fontSize: "32px",
            lineHeight: "44px",
            padding: "24px 44px",
            transition: "transform 0.3s ease",
          }}
          onClick={openMdk}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
