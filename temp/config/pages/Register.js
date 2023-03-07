import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = () => {

  const schema = yup.object().shape({
    fullName: yup.string().required("Your fullname is required."),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(5).required(),
    password: yup.string().min(4).max(20).required(),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Don't Match")
      .required(),
  });
  const { register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    console.log("HELLO WORLD");
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name..."
        {...register("fullName")}
      ></input>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")}></input>
      <input
        type="number"
        placeholder="Age"
        {...register("age", { min: 5, max: 99 })}
      />
      <input
        type="text"
        placeholder="Password..."
        {...register("password")}
      ></input>
      <input
        type="text"
        placeholder="Confirm Password..."
        {...register("confimedPassword")}
      ></input>
      <input type="submit" />
    </form>
  );
};
