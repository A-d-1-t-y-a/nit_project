import React from "react";

function FeedBack() {
  return (
    <div className="bg-red-100 flex items-center justify-center">
      <div className="bg-violet-300 py-14 px-10 flex items-center flex-col w-1/3 rounded-xl">
        <p className="text-black text-4xl font-extrabold mb-8">
          Have Questions?<br/>We Have Answers
        </p>
        <p className="text-black text-base font-medium">
          Want to find out more about slashQ?FAQs <br/>and official info on every
          slashQ feature.
        </p>
        <button className="bg-white text-base text-black font-bold py-4 px-10 rounded-full mx-auto mt-5">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default FeedBack;
