"use client"
import { FC, useState, ChangeEvent, FormEvent } from 'react';
import Link from "next/link";

import Head from 'next/head';

interface FormData {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      name: '',
      email: '',
      confirmEmail: '',
      phone: '',
      password: '',
      confirmPassword: ''
    };

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Emails do not match';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters';
    }
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

    const isValid = !newErrors.name && !newErrors.email && !newErrors.confirmEmail && !newErrors.phone && !newErrors.password && !newErrors.confirmPassword;

    if (isValid) {
      console.log('Form submitted:', formData);
    }
  };

  const handleShowPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(e.target.checked);
  };

  return (
    <div className="w-full min-h-screen bg-[#04062f] px-4 md:px-10 flex flex-col items-center justify-center">
      <Head>
        <title>Sign Up - Lottobit</title>
      </Head>
      <div className="w-full py-8">
        <div className="flex flex-col items-center">
        {/* <Link href="/">

          <img
            src="/heider.png" 
            alt="Lottobit Logo"
            className="h-16 mb-4"
          />
          </Link>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg flex items-center mb-4">
            <img src="/google.svg" alt="Google Logo" className="h-5 mr-2" />
            Continue with Google
          </button>
          <div className="text-center text-white">OR</div> */}
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="bg-[#1a1a40] shadow-lg rounded-lg p-4 md:p-8 w-full max-w-md">
          <h2 className="text-center text-2xl font-bold text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            {/* <div className="mb-4">
              <label htmlFor="confirmEmail" className="block text-white">Confirm Email</label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Confirm Email"
              />
              {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail}</p>}
            </div> */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-white">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Phone"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-white">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            {/* <div className="mb-6 relative">
              <label htmlFor="confirmPassword" className="block text-white">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div> */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={handleShowPasswordChange}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-white">Show password</label>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white w-full py-2 rounded-lg"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center text-white mt-4">
            Already have an account? <a href="/signin" className="text-yellow-500">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
