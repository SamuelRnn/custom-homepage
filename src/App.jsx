import Clock from "./clock";
import Card from "./Card";
import { IoAddSharp } from "react-icons/io5";
import Form from "./Form";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const linksPersisted = JSON.parse(localStorage.getItem("links"));
  const [links, setLinks] = useState(linksPersisted || []);
  const [active, setActive] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links, null, 2));
  }, [links]);

  return (
    <>
      <div className="h-screen w-screen bg-bg text-light flex flex-col items-center">
        <div className="mt-28">
          <Clock />
        </div>
        <div className="grid_container">
          <div className="links_grid">
            {links &&
              links.map((link, i) => (
                <Card
                  key={i}
                  id={link.id}
                  title={link.title}
                  url={link.url}
                  setCurrentForm={setCurrentForm}
                  openForm={setActive}
                  links={links}
                  setLinks={setLinks}
                />
              ))}
            <motion.button
              whileHover={{ backgroundColor: "rgb(171 64 96)" }}
              transition={{ duration: 0.15 }}
              onClick={() => setActive(!active)}
              className="card bg-[#32303380]"
            >
              <IoAddSharp className="text-3xl text-light" />
            </motion.button>
          </div>
        </div>
      </div>
      <Form
        setActive={setActive}
        links={links}
        setLinks={setLinks}
        active={active}
        currentForm={currentForm}
        setCurrentForm={setCurrentForm}
      />
    </>
  );
}

export default App;
