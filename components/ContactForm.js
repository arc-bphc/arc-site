import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm('mwkyvlqy')
  if (state.succeeded) {
    return alert('Thanks for your message!')
  }
  return (
    <form className='flex flex-col items-start' onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input className="text-black w-max" id="name" type="text" name="name" />
      <label htmlFor="email">Email Address</label>
      <input className="text-black" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="text-black" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

export default ContactForm
