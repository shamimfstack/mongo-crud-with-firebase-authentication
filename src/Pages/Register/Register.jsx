import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterSuccess("User created successfully!!!");
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError("Something Wrong!!!");
      });
  };

  return (
    <div className="w-1/2 mx-auto shadow-lg">
      <h2 className="text-3xl text-center font-bold py-6">Register Here</h2>
      <form onSubmit={handleRegister} className="p-8">
        <input
          className="input input-bordered w-full mb-5"
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <input
          className="input input-bordered w-full mb-5"
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <div className="w-full relative">
          <input
            className="input input-bordered w-full mb-5"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-5"
          >
            {showPassword ? <AiFillEyeInvisible className="text-xl"></AiFillEyeInvisible> : <AiFillEye className="text-xl"></AiFillEye>}
          </span>
        </div>
        <input
          className="w-full btn bg-info py-2"
          type="submit"
          value="Register"
        />
      </form>
      {registerSuccess && <p>{registerSuccess}</p>}
      {registerError && <p>{registerError}</p>}
      <div>
        <p className="text-center pb-5">
          Already Have an account? Please{" "}
          <Link className="text-purple-600 font-bold" to="/login">
            Login
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Register;
