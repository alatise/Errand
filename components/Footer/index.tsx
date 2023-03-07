import React from "react";
import Button from "../Button";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#243763] border w-full h-full px-28 text-[#EEEEEE]">
        <p className=" font-bold leading-43 text-3xl  mt-10 mb-8">Gofer</p>
        <div className="flex items-center w-full">
          <p className="flex-1">
            Random Text that goes here should go here.
            <br /> Even another text should go here.
          </p>
          <div className="flex flex-col">
            <p className="flex justify-center">Get the app</p>
            <Button
              child={
                <>
                  <img
                    src="/errandIcons/applelogo.svg"
                    className="mr-2 "
                    alt=""
                  />
                  Download on the
                  <br />
                  App Store
                </>
              }
              className="bg-[#243763]  border border-white text-xs text-white
                      rounded px-1 py-1 mb-2"
              onClick={() => {}}
            />
            <Button
              child={
                <>
                  <img
                    src="/errandIcons/googleplaylogo.svg"
                    className="mr-4"
                    alt=""
                  />
                  GET IT ON <br />
                  Google Play
                </>
              }
              className="bg-[#243763]  border border-white text-xs text-white
                      rounded px-1 py-1"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-row gap-14 mt-2 mb-6">
          <a href="#">About Us</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
        </div>
        <div className="border border-b-0 border-[#082563] mb-8"></div>
        <div className="flex mb-8 items-center w-full">
          <p className="flex-1">&copy; 2023. Gofer. All Rights Reserved</p>
          <div className="flex flex-row gap-10 ">
            <a href="#">
              <img src="/errandIcons/facebooklogo.svg" className="" alt="" />
            </a>
            <a href="#">
              <img src="/errandIcons/instagramlogo.svg" className="" alt="" />
            </a>
            <a href="#">
              <img src="/errandIcons/linkedinlogo.svg" className="" alt="" />
            </a>
            <a href="#">
              <img src="/errandIcons/twitterlogo.svg" className="" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
