const translateServerErrors = (errors, setError) => {
  Object.keys(errors).forEach((key) => {
    setError(key, {
      type: "serverSide",
      message: errors[key].map((error) => error.message).join(", "),
    });
  });
};

export default translateServerErrors;
