"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

export default function ContactSection() {
  const onSubmit = async () => {
    try {
      await axios.post("/contact", values);
      toast.success("Message sent successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(`Failed to send message. Please try again later.`);
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit,
  });

  return (
    <section
      id="contact"
      className="min-h-[75vh] flex flex-col items-center justify-center relative overflow-hidden"
    >

      <div className="relative mx-auto w-full md:w-9/12 max-w-3xl p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl shadow-black/20">

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Contact Me
            </h2>
            <div className="relative">
              <Image
                src="/logo-no-background.png"
                width={55}
                height={55}
                alt="Contact Me"
                className="hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>
          <p className="mb-6 text-base text-gray-300 leading-relaxed">
            Got something on your mind or need to get in touch? Feel free to
            reach out, and I&apos;ll get back to you as soon as I can.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="What should I call you?"
                onChange={handleChange}
                value={values.name}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-md text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-white/25"
              />
              {errors.name && touched.name && (
                <div className="mt-1 text-red-400 text-xs">{errors.name}</div>
              )}
            </div>
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Where can I reach you?"
                onChange={handleChange}
                value={values.email}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-md text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-white/25"
              />
              {errors.email && touched.email && (
                <div className="mt-1 text-red-400 text-xs">{errors.email}</div>
              )}
            </div>
            <div className="md:col-span-2 group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                onChange={handleChange}
                value={values.message}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-md text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-white/25 resize-none h-24"
              />
              {errors.message && touched.message && (
                <div className="mt-1 text-red-400 text-xs">
                  {errors.message}
                </div>
              )}
            </div>
            {isSubmitting ? (
              <div className="md:col-span-2 flex items-center justify-center gap-2 py-3">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-gray-300 text-sm">Sending...</div>
              </div>
            ) : (
              <button
                type="submit"
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-2.5 px-6 rounded-md font-medium text-white text-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>

      <Link
        to="home"
        href="#home"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer font-medium mt-16"
      >
        Scroll to Top
      </Link>
    </section>
  );
}
