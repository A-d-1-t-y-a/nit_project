import React from "react";

function CashBack() {
  return (
    <div className="w-full bg-red-700 pb-20">
      <div className="mx-auto bg-white px-10 py-3 w-5/12">
        <div className="mx-auto w-2/3 flex items-center flex-col">
          <p className="text-black font-bold text-3xl whitespace-nowrap">
            Waitlist users eligible for <br />
            &nbsp;&nbsp;&nbsp; Flat 2% Cashback *
          </p>
          <p className="text-slate-400">Join 52890 others!</p>
          <input
            className="bg-slate-100 px-3 py-2 rounded-sm w-full pl-6 outline-none my-4"
            placeholder="FIRST NAME"
          />
          <input
            className="bg-slate-100 px-3 py-2 rounded-sm w-full pl-6  outline-none my-4"
            placeholder="LAST NAME"
          />
          <input
            className="bg-slate-100 px-3 py-2 rounded-sm w-full pl-6 outline-none my-4"
            type="phone-number"
            placeholder="YOUR PHONE NUMBER"
          />
          <div className="flex items-start gap-3 my-4">
            <input type="checkbox" className="mt-2"/>
            <p className="text-black font-medium text-justify">
              Send me promotional notifications about events, products, and news
              about Kiwi via communication channels including but not limited to
              Emails, WhatsApp and SMS. I agree to the{" "}
              <span className="underline">Terms & Conditions.</span>
            </p>
          </div>
          <button className="w-full text-black bg-slate-400 py-3 font-medium text-2xl rounded-lg">
            Get Early Access
          </button>
          <div className="flex items-center mb-3">
            {/* todo: icon need to add */}
            <div>
                <p className="font-medium text-base">Your privacy is our priority</p>
                <p className="text-xs">Kiwi uses end-to-end encryption to keep your data safe & secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashBack;
