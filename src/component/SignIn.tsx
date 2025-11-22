import Link from "next/link";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-10">
        <div className="">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full">
              <h2 className="p-4 text-center font-bold text-black md:text-3xl lg:text-5xl">
                ZK <span className="text-[#7bc743]">BIO </span> Time
              </h2>
              <div className="w-full bg-[#7bc743]">
                <form className="mx-auto max-w-3xl py-8">
                  <div className="my-8">
                    <div className="">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Admin Login{" "}
                        <span className="text-dark font-medium">
                          | Self Service
                        </span>
                      </label>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300"
                    />
                  </div>
                  <div className="mb-8">
                    {/* <label
                      htmlFor="password"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Your Password
                    </label> */}
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300"
                    />
                  </div>
                  <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <label
                        htmlFor="checkboxLabel"
                        className="text-body-color flex cursor-pointer items-center text-sm font-medium select-none"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                          />
                          <div className="box border-body-color/20 mr-4 flex h-5 w-5 items-center justify-center border-2 bg-white dark:border-white/10">
                            <span className="opacity-0">
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        I agree to the{" "}
                        <span className="text-white">
                          {" "}
                          Personal Information protection and Privacy policy
                        </span>{" "}
                        &{" "}
                        <span className="text-white">
                          {" "}
                          Data Processing Agreement
                        </span>
                      </label>
                    </div>
                    {/* <div>
                      <a
                        href="#0"
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div> */}
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none">
                      Log in
                    </button>
                  </div>
                </form>
                {/* <p className="text-body-color text-center text-base font-medium">
                  Don’t you have an account?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p> */}
              </div>
              <div className="mx-auto w-full pt-2">
                <div className="flex justify-center">
                  <Image
                    src="/images/LOGO.jpg"
                    alt="My Photo"
                    width={200}
                    height={200}
                  />
                </div>
                <p>Copyright © 2025 ZKTECO CO. LTD All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
