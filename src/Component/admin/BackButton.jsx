import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white
        dark:bg-[#111827]
        hover:bg-slate-50
        dark:hover:bg-slate-800
        transition
      "
    >
      <ArrowLeft size={18} />
      Go Back
    </button>
  );
};

export default BackButton;