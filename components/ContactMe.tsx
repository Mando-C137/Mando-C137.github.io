import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:paulheisner@gmail.com?subject=${data.subject}&body=${data.message} sent by ${data.name}`;
  };

  return (
    <div
      className='h-screen relative flex flex-col text-center 
    md:text-left md:flex-row
    max-w-7xl justify-evenly items-center mx-auto'>
      <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl text-center'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold  text-center'>
          I have got just what you need.{" "}
          <span className='decoration-primary/50 underline'>Lets Talk.</span>
        </h4>

        <div className=' space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-primary h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+49 179 5014285</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-primary h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Germany, Mühlenweg 26</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-primary h-7 w-7 animate-pulse' />
            <p className='text-2xl'>paulheisner@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className=' flex flex-row space-x-2'>
            <input
              placeholder='Name'
              className='contactInput'
              type='text'
              {...register("name")}
            />
            <input
              placeholder='Email'
              className='contactInput'
              type='email'
              {...register("email")}
            />
          </div>

          <input
            placeholder='Subject'
            className='contactInput'
            type='text'
            {...register("subject")}
          />
          <textarea
            placeholder='message'
            className='contactInput'
            {...register("message")}></textarea>
          <button
            type='submit'
            className='bg-primary py-5 px-10
          rounded-md text-black font-bold text-lg '>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
