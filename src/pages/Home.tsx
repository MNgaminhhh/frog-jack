import { useState } from "react";
import projectLogo from "../assets/projectLogo.png";
import playIcon from "../assets/playIcon.png";
import { Link } from "react-router-dom";
import Mdk from "@interlinklabs/mdk";
import Login from "./Login";

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
      <div className="w-full">
        <div className="flex items-center">
          {!isLoggedIn ? (
            <Mdk
              appid="id__8dllc9geszbw7dkt44ag"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
            >
              {({ open }: any) => <Login openMdk={open} />}
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
