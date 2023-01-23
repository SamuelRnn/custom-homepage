import Clock from "./clock";
import Card from "./Card";
import { IoAddSharp } from "react-icons/io5";
import Form from "./Form";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const linksPersisted = JSON.parse(localStorage.getItem("links"));
  const [links, setLinks] = useState(linksPersisted || []);
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(linksPersisted);
    console.log(links);
    localStorage.setItem("links", JSON.stringify(links, null, 2));
  }, [links]);
  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className="bg-card text-zinc-400 p-2 rounded-md absolute top-10 right-10 grid place-content-center"
      >
        <IoAddSharp className="text-3xl" />
      </button>
      <div className="h-screen w-screen bg-bg text-light flex flex-col items-center">
        <div className="mt-28">
          <Clock />
        </div>
        <div className="grid_container">
          <div className="links_grid">
            {links &&
              links.map((link, i) => (
                <Card key={i} title={link.title} url={link.url} />
              ))}
          </div>
        </div>
      </div>
      <Form
        setActive={setActive}
        links={links}
        setLinks={setLinks}
        active={active}
      />
    </>
  );
}

export default App;
