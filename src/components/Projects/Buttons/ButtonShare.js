import React from "react";
import { FaShare } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";
import "./buttonsProject.css";

const ButtonShare = () => {
  return (
    <>
      <CopyToClipboard text="https://portafolio-david-gonzalez-front.vercel.app/">
        <button
          className="container"
          onClick={() => toast("Copy to clipboard!")}
        >
          <FaShare className="icon" />
          share
        </button>
      </CopyToClipboard>
      <Toaster />
    </>
  );
};

export { ButtonShare };
