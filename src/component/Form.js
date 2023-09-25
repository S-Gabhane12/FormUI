import React, { Component } from "react";
import { FilePicker } from "react-file-picker";
import {
  BsArrowLeft,
  BsFileEarmarkArrowUpFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full max-w-sm p-4 m-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6">
          <div className="flex items-center gap-[15px]  py-4 px-4">
            <BsArrowLeft />
            <h1 className="font-boldtext font-medium text-gray-900">
              Submit form
            </h1>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>

            <input
              type="text"
              name="username"
              id="username0"
              autoComplete="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="email"
                name="email"
                id="username1"
                autoComplete="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
              />
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <AiOutlineMail />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="cover-photo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload JSON File
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 sm:max-w-md">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <BsFileEarmarkArrowUpFill
                  color="rgb(29 78 216 / var(--tw-bg-opacity))"
                  size={30}
                />
                <span className="text-black">Browse File</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="preview"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              File Contents
            </label>

            <textarea
              id="preview"
              name="preview"
              rows="3"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
