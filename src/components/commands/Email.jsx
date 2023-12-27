// Email.jsx

import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import ContactMe from "../ContactMe";

// ...
const Email = () => {
  const { history, rerender } = useContext(termContext);
  const email = import.meta.env.VITE_EMAIL;
  const [isContactMeOpen, setIsContactMeOpen] = useState(false);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
      setIsContactMeOpen(true);
    }
  }, [rerender, currentCommand, email]);

  return (
    <>
      {isContactMeOpen && <ContactMe onClose={() => setIsContactMeOpen(false)} />}
    </>
  );
};
// ...


export default Email;
