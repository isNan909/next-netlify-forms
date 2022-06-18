import type { NextPage } from 'next';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type formType = {
  fullName: string;
  companyEmail: string;
  phoneNumber: string;
  companyWebsite: string;
  companySize: string;
  acceptTerms: boolean;
};

const Home: NextPage = () => {
  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required('Fullname is required'),
    companyEmail: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .min(7, 'Phone must be at least 7 numbers')
      .max(12, 'UserPhonename must not exceed 12 characters'),
    companyWebsite: Yup.string().url('Invalid website url'),
    companySize: Yup.string().required('Company size is required'),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions'
    ),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formType>({
    mode: 'onChange',
    resolver: yupResolver(validateSchema),
  });

  const onSubmit = (data: formType) => {
    //serverless netlify function call here
    console.log(JSON.stringify(data), 'sucessfully submitted');
  };

  return (
    <>
      <Head>
        <title>Next.js and Netlify Function Forms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Get in touch
                </h2>
                <p className="mt-2 text-center text-md text-gray-500">
                  We'd love to get a enquiry or any business oppurtunities from
                  any part of the world, our team will get back to you!
                </p>
              </div>
              <form
                className="mt-8 space-y-6"
                action="#"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                {/* name field */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="fullName"
                    className="form-label inline-block mb-2 text-gray-700 font-medium"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    {...register('fullName')}
                    id="fullName"
                    aria-describedby="nameHelp"
                  />
                  {errors.fullName && (
                    <small
                      id="emailHelp"
                      className="block mt-1 text-sm text-red-600"
                    >
                      Your name is required field
                    </small>
                  )}
                </div>

                {/* company email field */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="companyEmail"
                    className="form-label inline-block mb-2 text-gray-700 font-medium"
                  >
                    Company Email
                  </label>
                  <input
                    type="email"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    {...register('companyEmail')}
                    id="companyEmail"
                    aria-describedby="emailHelp"
                  />
                  {errors.companyEmail && (
                    <small
                      id="emailHelp"
                      className="block mt-1 text-sm text-red-600"
                    >
                      Your email is required field
                    </small>
                  )}
                </div>

                {/* phone number field */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="form-label inline-block mb-2 text-gray-700 font-medium"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    {...register('phoneNumber')}
                    id="phoneNumber"
                    aria-describedby="numberHelp"
                  />
                  {errors.phoneNumber && (
                    <small
                      id="emailHelp"
                      className="block mt-1 text-sm text-red-600"
                    >
                      Your number is required field
                    </small>
                  )}
                </div>

                {/* company website optional field */}

                <div className="form-group mb-4">
                  <label
                    htmlFor="companyWebsite"
                    className="form-label inline-block mb-2 text-gray-700 font-medium"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    {...register('companyWebsite')}
                    id="companyWebsite"
                    aria-describedby="websiteHelp"
                  />
                  {errors.companyWebsite && (
                    <small
                      id="websiteHelp"
                      className="block mt-1 text-sm text-red-600"
                    >
                      Your website is incorrect
                    </small>
                  )}
                </div>

                {/* company size field */}
                <div className="form-group">
                  <label
                    htmlFor="companySize"
                    className="form-label inline-block mb-2 text-gray-700 font-medium"
                  >
                    Company size
                  </label>
                  <select
                    className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Select an option"
                    {...register('companySize')}
                    onChange={(e) =>
                      setValue('companySize', e.target.value, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <option value={''}>Select an option</option>
                    <option value="5-10">Small, 5-10 employees</option>
                    <option value="10-50">Medium, 10-50 employees</option>
                    <option value="50+">Large, 50+ employees</option>
                  </select>
                  {errors.companySize && (
                    <small
                      id="sizeHelp"
                      className="block mt-1 text-sm text-red-600"
                    >
                      You should select company size
                    </small>
                  )}
                </div>

                {/* checkbox field */}
                <div className="flex justify-start mt-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      {...register('acceptTerms')}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I hereby confirm all the information provided is true and
                      accurate.
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <small
                      id="sizeHelp"
                      className="block mt-1 text-sm text-red-600"
                    >
                      You should accept our terms and condition
                    </small>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Get in touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      </main>
    </>
  );
};

export default Home;
