import React from "react";
import Slider from "rc-slider";
import { useForm, Controller } from "react-hook-form";
import OnBoardingImg from "../on-boarding/onBoarding-img";
import "rc-slider/assets/index.css";

const WeightGoals = ({ setStep, handleChange, user }) => {
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("weightGoals");
  };

  const { register, handleSubmit, control, errors } = useForm({});

  const marks = {
    0: "0 lbs/week (maintain weight)",
    1: "1 lbs/week",
    2: "2 lbs/week",
  };

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          Weight Goals{" "}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-group"
          role="form "
        >
          <label htmlFor="feet">Target Weight</label>
          <input
            className="rounded p-1 w-100 border border-primary"
            type="number"
            id="goalWeight"
            name="goalWeight"
            placeholder="lbs."
            defaultValue={0}
            onChange={handleChange}
            ref={register({
              required: {
                value: true,
                message: "Please add your goal weight in pounds (lbs.)",
              },
            })}
          />
          {errors.goalWeight && (
            <small className="text-danger">{errors.goalWeight.message}</small>
          )}
          <div className="mt-4">
            <label htmlFor="rate-of-weight-change">
              Rate of Weight Gain or Loss
            </label>
            <Controller
              name="WeightChange_Slider"
              control={control}
              as={
                <Slider
                  onChange={handleChange}
                  step={1}
                  max={2}
                  min={0}
                  vertical={false}
                  defaultValue={0}
                  value={user.weightChangeRate}
                  marks={marks}
                />
              }
            />
          </div>
          <button
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary mt-1"
            onClick={handleSubmit(onSubmit)}
          >
            Continue
          </button>
          <button
            onClick={() => setStep("BMI")}
            className="mt-3 btn-secondary rounded p-2 w-100"
          >
            Back
          </button>
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};
export default WeightGoals;