import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Form = ({ links, active, setLinks, setActive }) => {
  useEffect(() => {
    document.onkeydown = (event) => {
      if (event.code === "Escape") setActive(false);
    };
    return () => {
      document.onkeydown = null;
    };
  });

  const [form, setForm] = useState({
    title: "",
    url: "",
  });

  const onChange = ({ target }) => {
    setForm((data) => ({ ...data, [target.name]: target.value }));
  };

  const postNewLink = (event) => {
    event.preventDefault();
    setLinks(links.concat(form));
    setActive(false);
  };
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bg-black bg-opacity-40 backdrop-blur-sm top-0 h-screen w-full grid place-content-center"
        >
          <motion.div
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            className="bg-[#161618] w-[340px] py-4 px-4 text-zinc-300 rounded-lg"
          >
            <form onSubmit={postNewLink} className="flex flex-col gap-y-4">
              <input
                onChange={onChange}
                type="text"
                placeholder="title"
                required
                name="title"
                className="bg-neutral-800 rounded text-zinc-200 px-2 py-3 outline-none placeholder:text-zinc-500"
              />
              <input
                onChange={onChange}
                type="text"
                required
                placeholder="url"
                name="url"
                className="bg-neutral-800 rounded text-zinc-200 px-2 py-3 outline-none placeholder:text-zinc-500"
              />
              <button
                disabled={!form.title || !form.url}
                type="submit"
                className="bg-accent text-zinc-50 rounded py-2 mt-4 disabled:bg-zinc-700 disabled:text-zinc-500 transition-colors"
              >
                New link
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Form;
