import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ReactComponent as GirlComputerImg } from "../../assets/GirlComptr.svg";

const SignUp = ({ setStep }) => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("DietaryPref");
  };
  return (
    <div className="d-block">
      <div className="d-flex justify-content-center">
        <div className="d-block p-5 m-5">
          <h1 className="text-center pb-3"> Sign Up </h1>
          <h4 className="text-center pb-5">
            You&apos;re one step closer to your goals!
          </h4>
          <form data-toggle="validator" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="mb-0">Your Name</label>
              <input
                name="username"
                className="rounded p-2 w-100 border border-primary"
                placeholder="First and Last Name"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /\b[^\d\W]+\b/g,
                    message: "Invalid name entry",
                  },
                })}
              />
              {errors.username && errors.username.message}
            </div>

            <div className="form-group">
              <label className="mb-0">E-mail</label>
              <input
                name="email"
                className="rounded p-2 w-100 border border-primary"
                placeholder="email@email.com"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>

            <div className="form-group">
              <label className="mb-0">Password</label>
              <input
                name="password"
                className="rounded p-2 w-100 border border-primary"
                placeholder="8-12 characters"
                type="password"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password cannot have more than 12 characters",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className="form-group mb-5">
              <label className="mb-0">Confirm Password</label>
              <input
                name="password_repeat"
                placeholder="Confirm Password"
                className="rounded p-2 w-100 border border-primary"
                type="password"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <p>{errors.password_repeat.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary rounded p-2 w-100 border border-primary"
              onClick={handleSubmit(onSubmit)}
            >
              Let&apos;s Go!
            </button>
          </form>
          <div className="d-flex justify-content-center mt-3 p-2">
            <div className="d-flex justify-content-center">
              <p className="mr-2"> Already a member? </p>
              <Link to="/signin"> Sign In </Link>
            </div>
          </div>
        </div>
        <div className="pt-2 mt-4 d-none d-xs-none d-sm-none d-md-block">
          <GirlComputerImg className="img-responsive" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
