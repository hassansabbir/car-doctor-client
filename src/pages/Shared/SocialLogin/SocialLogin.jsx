import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div>
      <p className="text-center my-2 font-bold">Or Sign In with</p>
      <div className="flex gap-3 justify-center">
        <button className="bg-slate-200 p-4 btn-circle">
          <FaFacebookF />
        </button>
        <button className="bg-slate-200 p-4 btn-circle">
          <FaGithub />
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="bg-slate-200 p-4 btn-circle"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
