import React from "react";

function Form() {
  return (
    <form>
      <div className="space-y-4 mt-8">
        <input
          type="text"
          name="name"
          placeholder="Miguel Angel Jaramillo Munoz"
          className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
        />

        <input
          type="text"
          name="phone"
          placeholder="+57 3023278057"
          className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="basc.cartagena@example.com"
          className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
        />

        <textarea
          placeholder="Escribe tu mensaje aquí"
          name="message"
          className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
        ></textarea>
      </div>

      <button
        type="button"
        className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-darkBlue hover:bg-blue-700 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          fill="#fff"
          className="mr-2"
          viewBox="0 0 548.244 548.244"
        >
          <path
            fill-rule="evenodd"
            d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
            clip-rule="evenodd"
            data-original="#000000"
          />
        </svg>
        Enviar Mensaje
      </button>
    </form>
  );
}

export default Form;
