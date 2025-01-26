import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebaseConfig";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});
const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        const user = result.user;
        console.log(user);
      } else {
        console.log("Can't login with google");
      }
    } catch (error) {}
  };

  return (
    <Button
      loading={isLoading}
      onClick={handleLoginWithGoogle}
      style={{
        width: "100%",
      }}
      size="large"
      icon={
        <img
          width={24}
          height={24}
          src="https://img.icons8.com/fluency/48/google-logo.png"
          alt="google-logo"
        />
      }
    >
      Sign up with Google
    </Button>
  );
};

export default SocialLogin;
