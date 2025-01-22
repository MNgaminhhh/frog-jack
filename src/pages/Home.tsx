import { useState } from "react";
import projectLogo from "../assets/projectLogo.png";
import playIcon from "../assets/playIcon.png";
import { Link } from "react-router-dom";
import Mdk from "@interlinklabs/mdk";

export function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="w-auto">
        <div className="flex items-center">
          <img className="w-24" src={projectLogo} alt="Project Logo" />
          {!isLoggedIn ? (
            <Mdk
              appid="id__hl0k5j8r1rp5mz35ggb0"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
            >
              {({ open }) => (
                <button
                  onClick={open}
                  className="ml-8 w-auto flex items-center animate-bounce text-2xl"
                  style={{
                    backgroundColor: "#ff4b5c",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Sign In to Play
                </button>
              )}
            </Mdk>
          ) : (
            // Sau khi đăng nhập thành công, hiển thị liên kết để chuyển đến trang game
            <Link
              className="ml-8 w-auto flex items-center animate-bounce text-2xl"
              to="/game"
            >
              Play now{" "}
              <img className="w-4 h-6 ml-2" src={playIcon} alt="Play Icon" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
