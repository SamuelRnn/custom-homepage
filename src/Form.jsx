import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { v4 as uuid } from "uuid";

const Form = ({
  links,
  active,
  currentForm,
  setLinks,
  setActive,
  setCurrentForm,
}) => {
  const initialForm = {
    id: "",
    title: "",
    url: "",
  };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (active) {
      document.onkeydown = (event) => {
        if (event.code === "Escape") {
          setActive(false);
          setForm(initialForm);
        }
      };
    } else {
      document.onkeydown = null;
    }
  }, [active]);

  useEffect(() => {
    if (currentForm) {
      setForm(currentForm);
    }
  }, [currentForm]);

  const onChange = ({ target }) => {
    setForm((data) => ({ ...data, [target.name]: target.value }));
  };

  const postNewLink = (event) => {
    event.preventDefault();

    if (form.id) {
      //edit current link
      const newLinks = [...links];
      let link = newLinks.find((l) => l.id === form.id);
      (link.title = form.title), (link.url = form.url), setLinks(newLinks);
    } else {
      const newId = uuid();
      setLinks(links.concat({ ...form, id: newId }));
      //-------------
    }
    setForm(initialForm);
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
          <button
            onClick={() => {
              setActive(false);
              setForm(initialForm);
            }}
            className="absolute top-4 right-4 p-2 text-zinc-200 rounded-xl hover:bg-[#ffffff20] transition-colors"
          >
            <IoMdClose className="text-3xl" />
          </button>
          <motion.div
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            className="bg-[#161618] w-[340px] py-4 px-4 text-zinc-300 rounded-lg"
          >
            <form onSubmit={postNewLink} className="flex flex-col gap-y-4">
              <input
                onChange={onChange}
                value={form.title}
                type="text"
                placeholder="title"
                required
                name="title"
                className="bg-neutral-800 rounded text-zinc-200 px-2 py-3 outline-none placeholder:text-zinc-500"
              />
              <input
                onChange={onChange}
                value={form.url}
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
                {currentForm ? "Save" : "New link"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Form;
