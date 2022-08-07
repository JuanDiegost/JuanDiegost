import { useForm, ValidationError } from "@formspree/react";
import undrawMail from "../../img/undraw_mail_sent.svg";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return (
      <div className="bg-white flex flex-col items-center justify-center dark:bg-gray-800 text-gray-900 dark:text-white">
        <h4 className="text-xl">
          Gracias por su su mensaje.
        </h4>
        <div className="w-3/6 p-3 sm:w-4/12 md:p-10">
            <img src={undrawMail} alt="Mensaje enviado" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex justify-center dark:bg-gray-800 text-gray-900 dark:text-white">
      <form onSubmit={handleSubmit} className="mb-6 w-6/12">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tu email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email@dominio.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dime cómo pouedo ayudarte"
            required
          />
          <ValidationError
            prefix="Asunto"
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tu mensaje..."
          ></textarea>
          <ValidationError
            prefix="Mensaje"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          disabled={state.submitting}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
        >
          ENVIAR
        </button>
        <div className="text-gray-900 dark:text-white">
          <ValidationError errors={state.errors} />
        </div>
      </form>
    </div>
  );
}
