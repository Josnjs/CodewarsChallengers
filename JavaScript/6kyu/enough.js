const enough = (cap, on, wait) => {
  return wait + on < cap ? 0 : wait + on - cap;
};
