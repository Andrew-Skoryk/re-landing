import { FC, useState, FormEvent } from "react";

const SubscribeEmail: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="flex flex-col items-center justify-center font-bold lg:pt-52 pt-28 md:pt-32 relative before:absolute before:right-0 before:w-10/12 before:h-[2px] before:bg-zinc-500 before:top-0 mb-4 before:rounded-full xl:before:mr-32 before:mr-5 md:before:mr-16 m-auto">
      <h3 className="absolute tracking-wide text-slate-50 text-ellipsis lg:text-xl top-28 md:top-34 lg:top-56">
        Subscribe to our news letter
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center max-w-3xl space-y-4 bg-center bg-no-repeat bg-cover spacey-6 py-28 md:py-32 md:w-1/2 md:flex-row bg-subscribeEmail 2xl:w-1/3 lg:py-52 lg:space-x-7 md:space-x-4 md:space-y-0"
      >
        <input
          type="email"
          placeholder="Your Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="flex-grow w-2/3 px-6 py-2 outline-none bg-stone-50 text-slate-800 rounded-3xl placeholder:text-slate-800"
        />
        <button className="px-8 py-2 transition-colors duration-300 bg-yellow-300 text-slate-800 rounded-3xl w-min hover:bg-yellow-400 active:bg-yellow-500">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscribeEmail;
