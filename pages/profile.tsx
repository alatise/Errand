import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";

export default function profile() {
  const router = useRouter();
  const [showBasic, setShowBasic] = useState(true);
  const [showVerification, setShowVerification] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleButtons = (value: string) => {
    if (value === "Basic") {
      setShowBasic(true);
      setShowVerification(false);
      setShowAdvanced(false);
    } else if (value === "Verification") {
      setShowVerification(true);
      setShowBasic(false);
      setShowAdvanced(false);
    } else if (value === "Advanced") {
      setShowAdvanced(true);
      setShowBasic(false);
      setShowVerification(false);
    }
  };
  return (
    <div className="bg-white h-full font-inter mt-8">
      <div className="bg-[#243763] h-24"></div>
      <div className="banner h-[250px] z-5"></div>
      <div className=" flex z-20 w-full justify-center items-center px-40 pb-40">
        <div className=" w-full">
          <div className="flex">
            <div className="flex -mt-10 space-x-8 w-52 h-52 border-[6px] border-white rounded-full shadow-lg"></div>
            <div className="mt-8 flex justify-between">
              <div className="mt-0 ml-8">
                <div className="flex mb-4">
                  <h1 className="font-inter text-2xl  text-[#011E3E] font-bold items-center">
                    Zebrudaya Owonikoko Niggaregbe{" "}
                  </h1>
                  <img
                    src="./verified.svg"
                    className="w-3 flex ml-2 mr-48 mt-1"
                    alt=""
                  />
                </div>

                <div className="flex text-[#011E3E] space-x-5 mt-2 text-sm mb-4">
                  <p className="font-inter font-semibold">Data Scientist </p>
                  <div className="flex space-x-2">
                    <div className="mt-2 mr-2">
                      <img
                        src="./dot.svg"
                        className="w-1.5 items-center justify-center"
                        alt=""
                      />
                    </div>
                    <div className="flex space-x-2 ">
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./halfstar.svg" className="w-3" alt="" />
                    </div>
                    <p className="text-[#011E3E]">
                      4.5 <span className="text-[#6D6D6D]">(134 reviews)</span>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="text-[#011E3E] font-semibold">
                    {" "}
                    100{" "}
                    <span className="text-[#6D6D6D] font-normal">
                      Total Errands
                    </span>
                  </p>
                  <div>
                    <img src="./line.svg" className="flex mx-2 mt-1" alt="" />
                  </div>
                  <p className="text-[#011E3E] font-semibold">
                    {" "}
                    100{" "}
                    <span className="text-[#6D6D6D] font-normal">
                      Errands Completed
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => {
                    router.push("/post-errand");
                  }}
                  child="Edit Profile"
                  className="bg-[#F0F3FA] text-black rounded-lg border-[#A5B6DE] py-2.5 w-40 border-1 text-xs mr-0"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full border-b-1 border-[#DEDEDE] space-x-16 pt-14 text-base ">
            <Button
              child="Basic"
              className={`${
                showBasic
                  ? " text-[#314B87] font-semibold  px-4 py-1 h-10 ml-11 border-b-[4px] w-[200px] border-black"
                  : " text-[#333333] font-semibold px-4 py-1 mx-8 w-[200px]"
              }`}
              active={showBasic}
              onClick={() => toggleButtons("Basic")}
            />
            <Button
              child="Verification"
              className={`${
                showVerification
                  ? " text-[#314B87] font-semibold  px-4 py-1 h-10 ml-11 border-b-[4px] w-[200px] border-black"
                  : " text-[#333333] font-semibold px-4 py-1 mx-8 w-[200px]"
              }`}
              active={showVerification}
              onClick={() => toggleButtons("Verification")}
            />
            <Button
              child="Advanced"
              className={`${
                showAdvanced
                  ? " text-[#314B87] font-semibold  px-4 py-1 h-10 ml-11 border-b-[4px] w-[200px] border-black"
                  : " text-[#333333] font-semibold px-4 py-1 mx-8 w-[200px]"
              }`}
              active={showAdvanced}
              onClick={() => toggleButtons("Advanced")}
            />
          </div>
          <div>
            {showBasic && (
              <div>
                <div className="pt-14 space-y-8 ">
                  <div>
                    <p className="text-sm text-[#6D6D6D] font-semibold">
                      Description
                    </p>
                    <p className="text-lg text-[#011E3E]">
                      Lorem ipsum dolor sit amet consectetur. Egestas etiam
                      lectus sapien eget. Eget massa consectetur senectus mi
                      aliquet. In nulla mattis sollicitudin placerat. Rhoncus
                      bibendum non suspendisse praesent diam a maecenas et. Eget
                      neque platea ut enim. Faucibus magnis ut aliquet quis.
                      Tellus commodo felis duis pretium et mauris et aliquet.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6D6D6D] font-semibold">
                      Email Address
                    </p>
                    <p className="text-lg text-[#011E3E]">
                      jekodunmiebrudayakinfemi@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6D6D6D] font-semibold">
                      Phone Number
                    </p>
                    <p className="text-lg text-[#011E3E]">+1 293 0914 910</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6D6D6D] font-semibold">
                      Date of Birth
                    </p>
                    <p className="text-lg text-[#011E3E]">17th August 1991</p>
                  </div>
                </div>
              </div>
            )}

            {showVerification && (
              <div className="">
                <div className="pt-14 space-y-8">
                  <div className="">
                    <p>Verification Progress</p>
                    <div className="flex mt-6">
                      <div className="w-full h-5 bg-gray-300 rounded-full relative">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <p className="ml-6 font-bold">80%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-11 sm:gap-x-11 row-gap-20 mt-12">
                    <div className="">
                      <p className="text-lg text-[#000000] mb-2 font-medium">
                        Basic Verification
                      </p>
                      <Button
                        child="Complete your Profile Verification"
                        className="w-9/12 font-bold bg-[#FDC49B] text-[#642B02] text-xs
                     p-2 rounded-lg"
                        onClick={() => {}}
                      />
                    </div>
                    <div>
                      <p className="text-lg text-[#000000]  mb-2 font-medium">
                        Verified for Transactions
                      </p>
                      <Button
                        child="Verification Complete"
                        className="w-6/12 font-bold bg-[#ADF0D1] text-[#115A38] text-xs p-2 rounded-lg"
                        onClick={() => {}}
                      />
                    </div>
                    <div>
                      <p className="text-lg text-[#000000]  mb-2 font-medium">
                        Email Verification
                      </p>
                      <Button
                        child="Verification Complete"
                        className="w-6/12 font-bold bg-[#ADF0D1] text-[#115A38] text-xs p-2 rounded-lg"
                        onClick={() => {}}
                      />
                    </div>
                    <div className="mt-8">
                      <p className="text-lg text-[#000000]  mb-2 font-medium">
                        Office Address Verification
                      </p>
                      <Button
                        child="Complete your Profile Verification"
                        className="w-9/12 font-bold bg-[#FDC49B] text-[#642B02] text-xs p-2 rounded-lg"
                        onClick={() => {}}
                      />
                    </div>
                    <div className="mt-8">
                      <p className="text-lg text-[#000000]  mb-2 font-medium">
                        GOFER Reference (Guarantor)
                      </p>
                      <Button
                        child="Verification Complete"
                        className="w-6/12 font-bold bg-[#ADF0D1] text-[#115A38] text-xs p-2 rounded-lg"
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showAdvanced && (
              <div>
                {" "}
                <div>
                  <div className="pt-14 space-y-8">
                    <p className="text-bold">Coming Soon................</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
