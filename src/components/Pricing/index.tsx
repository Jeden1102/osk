import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";
import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12  dark:bg-gray-900  lg:pb-[90px]"
    >
      <div className="container">
        <section className="relative py-10 overflow-hidden bg-primary sm:py-16 lg:py-24">
          <div className="absolute bottom-0 right-0 -mb-48 md:inset-y-0"></div>

          <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-end grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-20">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Try our product. One, simple pricing.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-blue-100">
                  All features for one price.
                </p>

                <ul className="mt-12 space-y-4 md:mt-20">
                  <li className="flex items-center space-x-3">
                    <FaCircleCheck className="text-secondary text-xl" />

                    <span className="text-lg font-medium text-white">
                      {" "}
                      Domain{" "}
                    </span>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FaCircleCheck className="text-secondary text-xl" />

                    <span className="text-lg font-medium text-white">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FaCircleCheck className="text-secondary text-xl" />

                    <span className="text-lg font-medium text-white">
                      {" "}
                      Unlimited Exports{" "}
                    </span>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FaCircleCheck className="text-secondary text-xl" />

                    <span className="text-lg font-medium text-white">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FaCircleCheck className="text-secondary text-xl" />

                    <span className="text-lg font-medium text-white">
                      {" "}
                      Commercial License{" "}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:px-12">
                <div className="overflow-hidden text-center bg-white rounded-md shadow-md">
                  <div className="px-12 py-10">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-secondary">
                      Full Pack
                    </h3>
                    <p className="mt-4 text-6xl font-bold text-black">
                      $79<span className="text-5xl font-normal">/mo</span>
                    </p>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-secondary"
                      role="button"
                    >
                      Get full access
                      <svg
                        className="w-5 h-5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pricing;
