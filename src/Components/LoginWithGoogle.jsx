import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
  const { googleLoginBtn } = useContext(authContext);
  const googleLoginHandler = async () => {
    await googleLoginBtn();
  };

  return (
    <div className="">
      <div class="flex items-center my-6">
        <hr class="flex-grow border-gray-300" />
        <span class="px-4 text-gray-500 text-sm">Or, Login with</span>
        <hr class="flex-grow border-gray-300" />
      </div>
      <div className="text-center flex items-center gap-3">
        <button
          onClick={googleLoginHandler}
          className="btn w-full bg-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
        >
          <span className="text-2xl">
            <FcGoogle />
          </span>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
