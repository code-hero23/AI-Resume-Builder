import React from "react";

const CallToAction = () => {
  return (
    <div id="cta" className="mt-10">
      <style>{`

                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            

                * {

                    font-family: 'Poppins', sans-serif;

                }

            `}</style>

      <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-16 ">
        <svg
          width="42"
          height="46"
          viewBox="0 0 42 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.5 6.619 9.5 5.438 9.5-5.438m-19 32.59V28.354L2 22.914m38 0-9.5 5.439V39.21M2.57 12.37 21 22.935l18.43-10.564M21 44V22.914m19 8.368V14.547c0-.734-.196-1.454-.567-2.09a4.2 4.2 0 0 0-1.544-1.53L23.11 2.562a4.25 4.25 0 0 0-4.222 0L4.11 10.928a4.2 4.2 0 0 0-1.544 1.53A4.15 4.15 0 0 0 2 14.546v16.735c0 .733.196 1.454.567 2.089s.903 1.163 1.544 1.53l14.778 8.367a4.25 4.25 0 0 0 4.222 0L37.89 34.9a4.2 4.2 0 0 0 1.544-1.53c.37-.635.566-1.356.567-2.09"
            stroke="#ff8400ff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-2xl md:text-3xl font-medium text-slate-900 max-w-2xl mt-5">
          Build a professional Resume That Helps You Stand Out and Get Hired.
        </h1>

        <p className="text-sm text-gray-500 max-w-lg mt-2">
          Our resume platform gives you professionally designed templates and expert guidance so you can quickly build a powerful resume that helps you stand out and get hired, without struggling with complex formatting.
        </p>

        <div className="flex gap-2">
          <button className="px-8 py-2.5 mt-4 text-sm bg-orange-600 hover:scale-105 transition duration-300 text-white">
            Get Started
          </button>

          <button className="flex items-center gap-2 px-8 py-2.5 mt-4 text-sm hover:scale-105 transition duration-300">
            Github
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0C3.133 0 0 3.133 0 7a7 7 0 0 0 4.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.557-.175-3.185-.779-3.185-3.456 0-.762.271-1.392.717-1.882-.07-.175-.314-.892.07-1.855 0 0 .587-.183 1.926.718a6.5 6.5 0 0 1 1.75-.236c.595 0 1.19.078 1.75.236 1.338-.91 1.925-.718 1.925-.718.385.963.14 1.68.07 1.855a2.7 2.7 0 0 1 .717 1.882c0 2.686-1.636 3.28-3.194 3.456.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.01 7.01 0 0 0 14 7c0-3.867-3.133-7-7-7"
                  fill="#ff6600ff"
                />
              </g>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
