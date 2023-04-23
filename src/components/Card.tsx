import { motion } from "framer-motion";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({
  id,
  url,
  title,
  setCurrentForm,
  openForm,
  links,
  setLinks,
}) => {
  const root = document.querySelector("#root");

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive((bool) => !bool);
  };

  useEffect(() => {
    if (active) {
      root.onclick = () => setActive(false);
    } else {
      root.onclick = null;
    }
  }, [active]);
  //-----------------------------------
  //pushes current link object to the form
  const handleEdit = () => {
    setCurrentForm({
      id,
      title,
      url,
    });
    openForm(true);
    setActive(false);
  };
  //-----------------------------------
  //deletes current link from the form
  const handleDelete = () => {
    const curIndex = links.findIndex((l) => l.id === id);
    const newLinks = [...links];
    newLinks.splice(curIndex, 1);

    setLinks(newLinks);
    setActive(false);
  };
  return (
    <div className="relative">
      <motion.div
        whileHover={{ backgroundColor: "rgb(171 64 96)" }}
        transition={{ duration: 0.15 }}
        className="card bg-card relative"
        title={title}
      >
        <a
          href={url}
          className="overflow-hidden text-ellipsis whitespace-nowrap w-[6rem] text-center py-3"
        >
          {title}
        </a>
        <button
          onClick={handleActive}
          className="absolute hover:bg-[#00000016] transition-colors duration-150 right-1 px-1 py-3 rounded-md"
        >
          <SlOptionsVertical className="text-sm" />
        </button>
      </motion.div>
      {/* Menu */}
      {active && (
        <div className="absolute bg-card w-[7rem] right-0 bottom-[-78px] rounded-md flex flex-col overflow-hidden text-zinc-300 text-sm">
          <button
            onClick={handleEdit}
            className="flex justify-between items-center px-2 py-2 hover:bg-zinc-700 transition-colors duration-150"
          >
            <p>Edit</p>
            <AiFillEdit />
          </button>
          <hr className="border-zinc-800" />
          <button
            onClick={handleDelete}
            className="flex justify-between items-center px-2 py-2 hover:bg-zinc-700 transition-colors duration-150"
          >
            <p>Delete</p>
            <AiFillDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
