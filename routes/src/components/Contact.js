import React from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory(); // useHistory hook
  return (
    <div>
      <p>Contact component.</p>
      <botton onClick={() => history.goBack()}>Go Back</botton>
    </div>
  );
};

export default Contact;
