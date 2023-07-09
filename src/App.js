import CashBack from "./components/cashback";
import FeedBack from "./components/feedback";
import Footer from "./components/footer";

function App() {
  const paymentModeOptions = [
    { title: "Cash Payment", image: "" },
    { title: "UPI Payment", image: "" },
    { title: "Debit card", image: "" },
  ];

  const renderPaymentMode = () => (
    <>
      <p className="text-center text-red-500 font-bold text-5xl uppercase">
        Payment Mode
      </p>
      <div className="flex items-center justify-around">
        {paymentModeOptions.map(({ title, image }) => (
          <div key={title}>
            <p className="text-3xl text-black font-medium my-6">{title}</p>
            {/* <img/> */}
          </div>
        ))}
      </div>
    </>
  );

  const renderIntro = () => (
    <>
      <div className="w-full justify-end flex p-7">
        <div className="text-center">
          <p className="font-medium text-black text-xl">
            Manage Crowd with
            <br /> our Intelligent
          </p>
          <p className="text-red-600 font-bold text-4xl">Token System</p>
        </div>
      </div>

      <div className="text-center my-10">
        <p className="font-medium text-base ">
          Save time, eliminate waiting lines and <br /> implement social
          distancing.
        </p>
        <button className="bg-orange-500 rounded-3xl px-5 py-4 text-white font-medium mt-10">
          Get Started Now
        </button>
      </div>

      {renderPaymentMode()}
      {/* get in touch today */}
      <div className="w-3/4 mx-auto flex justify-around py-6 items-center">
        <div className="w-1/4">
          <p className="text-black font-bold text-3xl">Get In Touch</p>
          <p className="text-red-600 my-2 font-bold text-3xl">Today</p>
          <p className="mt-4">
            We are here to help and answer any question you might have. We look
            forward to hearing from you. No appointment needed!
          </p>
        </div>
        <div className="bg-white rounded-3xl p-5 flex flex-col items-center gap-7 w-1/3">
          <input
            placeholder="Your name*"
            className="bg-slate-300 placeholder:text-black py-2 px-4 rounded-full w-full"
          />
          <input
            placeholder="Email Address*"
            className="bg-slate-300 placeholder:text-black py-2 px-4 rounded-full w-full"
          />
          <textarea
            placeholder="message"
            className="bg-slate-300 placeholder:text-black py-2 px-4 rounded-full min-h-12 w-full"
          />
          <button className="bg-orange-400 rounded-3xl font-bold text-white py-3 px-6">
            Send
          </button>
        </div>
      </div>

      {/* credit card works */}
      <div className="w-full flex flex-col items-center mb-20">
        <p className="text-extrabold text-3xl font-bold">
          A credit card that <br />
          works everywhere
        </p>
        <p className="text-slate-300 text-xs my-4 font-bold">Powered by</p>
        <div className="mx-auto flex items-center justify-center gap-10">
          {/* todo: icons */}
          {["RuPay", "UPI", "Axis Bank"].map((image) => (
            <div>{image}</div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-red-200 w-full min-h-screen">
      {renderIntro()}
      <CashBack />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
