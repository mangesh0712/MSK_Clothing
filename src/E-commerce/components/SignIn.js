import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { BellIcon } from "@heroicons/react/solid";
import * as yup from "yup";

import "./styles.css";
import { signInWithGoogle, auth } from "../firebase";
import Alert from "../common/Alert";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

function SignIn() {
  const [alertObj, setAlertObj] = useState({ showAlert: false });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useDispatch();

  let history = useHistory();

  const onSignIn = async (data) => {
    const { email, password } = data;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      user && history.push("/");
    } catch (err) {
      setAlertObj((obj) => {
        return {
          color: "red",
          message: err.message,
          showAlert: true,
        };
      });
    }
    reset();
  };

  const onSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        history.push("/");
      })
      .catch((err) => {
        // Handle Errors here.
        setAlertObj((obj) => {
          return {
            color: "red",
            message: err.message,
            showAlert: true,
          };
        });
      });
  };

  return (
    <div className="lg:ml-40 w-4/6">
      <h1 className="font-serif text-2xl font-black pb-2">
        I Already have an Account
      </h1>
      <p className="text-md mb-8">Sign in with your email and password</p>
      {alertObj?.showAlert ? (
        <Alert
          {...alertObj}
          onChangeShowAlert={setAlertObj}
          icon={
            <BellIcon className="h-8 text-gray-50 cursor-pointer hover:text-gray-300" />
          }
        />
      ) : (
        <form onSubmit={handleSubmit(onSignIn)}>
          <input
            {...register("email")}
            className={`ecInputs ${errors.email && "outlineInputError"}`}
            placeholder="Email"
            type="text"
          />
          {errors.email && (
            <span className="inputErrorMsg">{errors.email?.message}</span>
          )}
          <input
            {...register("password")}
            className={`ecInputs ${
              errors.email ? "mt-3 outlineInputError" : "mt-10"
            } ${errors.password && "outlineInputError"}`}
            placeholder="Password"
            type="text"
          />

          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="inputErrorMsg">{errors.password?.message}</span>
          )}

          <div
            className={`flex items-center ${
              errors.password ? "pt-3" : "pt-10"
            }`}
          >
            <button
              disabled={!isDirty}
              className={`ecButtons w-2/6 mr-4 bg-black text-center ${
                !isDirty && "cursor-not-allowed bg-gray-500"
              }`}
              type="submit"
            >
              SIGN IN
            </button>
            <button
              className="ecButtons w-4/6  bg-blue-500 flex-grow"
              onClick={onSignInWithGoogle}
              type="button"
            >
              SIGN IN WITH GOOGLE
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
