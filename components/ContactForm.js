import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm('mwkyvlqy')
  if (state.succeeded) {
    return <div>Your message was sent. We will get back to you as soon as possible.</div>
  }
  return (
    <form className="flex flex-col items-start" onSubmit={handleSubmit}>
      <label htmlFor="name" className="text-white-700 block text-2xl font-medium">
        Name
      </label>
      <input
        className="my-5 block w-full rounded-md border-gray-300 pl-7 pr-12 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
        id="name"
        type="text"
        name="name"
      />
      <label htmlFor="email" className="text-white-700 block text-2xl font-medium">
        Email Address
      </label>
      <input
        className="my-5 block w-full rounded-md border-gray-300 pl-7 pr-12 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email" className="text-white-700 block text-2xl font-medium">
        Message
      </label>
      <textarea
        className="my-5 block w-full rounded-md border-gray-300 pl-7 pr-12 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
