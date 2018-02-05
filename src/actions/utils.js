const createTimeout = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve('player moves'),
      1000
    );
  });
};


export { createTimeout };