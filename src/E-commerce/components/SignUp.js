import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { auth, createUserProfileDocument } from "../firebase";
import Alert from "../common/Alert";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  pswd: yup.string().min(8).required(),
  confirmPswd: yup
    .string()
    .oneOf([yup.ref("pswd"), null], "Please make sure both passwords match."),
});

function SignUp() {
  const [alertObj, setAlertObject] = useState({ showAlert: false });
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(watch("email"));
  // useEffect(() => {}, [alertObj]);
  useEffect(() => {
    reset();
    return () => {
      reset();
    };
  }, []);

  const onSubmit = async (data) => {
    console.log(errors, "errors");
    const { name, email, pswd } = data;
    try {
      /// signing up user
      const { user } = await auth.createUserWithEmailAndPassword(email, pswd);

      /// add signed in user to database
      await createUserProfileDocument(user, { displayName: name });
      if (user) {
        setAlertObject((obj) => {
          return {
            color: "green",
            message: "Sign Up Successfully",
            showAlert: true,
          };
        });
        reset();
        history.push("/");
      }
    } catch (err) {
      setAlertObject((obj) => {
        return {
          color: "red",
          message: err.message,
          showAlert: true,
        };
      });
    }
    /// clear input values on submit
  };

  return (
    <div className="lg:mr-40 w-4/6">
      <h1 className="font-serif text-2xl font-black pb-2">
        I Dont have an Account
      </h1>
      <p className="text-md mb-8">SignUp with your email and password</p>
      {alertObj?.showAlert ? (
        <Alert {...alertObj} onChangeShowAlert={setAlertObject} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Display Name"
            className="ecInputs"
            type="text"
          />
          {errors.name && (
            <span className="inputErrorMsg">{errors.name?.message}</span>
          )}
          <input
            {...register("email")}
            className={`ecInputs ${errors.name ? "mt-3" : "mt-10"}`}
            placeholder="Email"
          />
          {errors.email && (
            <span className="inputErrorMsg">{errors.email?.message}</span>
          )}
          <input
            {...register("pswd")}
            className={`ecInputs ${errors.email ? "mt-3" : "mt-10"}`}
            placeholder="Password"
            type="password"
          />
          {errors.pswd && (
            <span className="inputErrorMsg">{errors.pswd?.message}</span>
          )}
          <input
            {...register("confirmPswd")}
            className={`ecInputs ${errors.pswd ? "mt-3" : "mt-10"}`}
            placeholder="Confirm Password"
            type="password"
          />
          {errors.confirmPswd && (
            <span className="inputErrorMsg">{errors.confirmPswd?.message}</span>
          )}
          <div
            className={`flex items-center space-x-5 ${
              errors.confirmPswd ? "pt-3" : "pt-10"
            }`}
          >
            <button
              disabled={!isDirty}
              className={`ecButtons bg-black flex-grow ${
                !isDirty && "cursor-not-allowed bg-gray-500"
              }`}
              type="submit"
            >
              SIGN UP
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
