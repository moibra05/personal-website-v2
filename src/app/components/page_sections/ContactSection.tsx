"use client";

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ContactSection() {
  const onSubmit = async () => {
    try {
      await axios.post("/contact", values);
      alert("Message sent successfully!");
    } catch (error) {
      alert(`Failed to send message. Please try again later. Erorr: ${error}`);
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
      className="min-h-[75vh] flex items-center justify-center"
    >
      <div className="mx-auto w-full md:w-9/12 max-w-3xl p-8 rounded-md shadow-contact-form-shadow">
        <div className="flex justify-between items-center mb-2">
          <h2>Contact Me</h2>
          <Image
            src="/logo-no-background.png"
            width={65}
            height={65}
            alt="Contact Me"
          />
        </div>
        <h4 className="mb-6">
          Got something on your mind or need to get in touch? Feel free to reach
          out, and I&apos;ll get back to you as soon as I can.
        </h4>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What should I call you?"
              onChange={handleChange}
              value={values.name}
              className="form-input"
            />
            {errors.name && touched.name && (
              <div className="error-text">{errors.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Where can I reach you?"
              onChange={handleChange}
              value={values.email}
              className="form-input"
            />
            {errors.email && touched.email && (
              <div className="error-text">{errors.email}</div>
            )}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              onChange={handleChange}
              value={values.message}
              className="form-input resize-none h-48"
            />
            {errors.message && touched.message && (
              <div className="error-text">{errors.message}</div>
            )}
          </div>
          {isSubmitting ? (
            <div className="md:col-span-2 text-center">Sending...</div>
          ) : (
            <button
              type="submit"
              className="md:col-span-2 bg-secondary py-2 rounded-md font-bold hover:bg-tertiary hover:text-primary transition-colors duration-300"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
