export const ATTRIBUTES = {
  disabled: 'disabled',
  hidden: 'hidden',
};

export const ATTRIBUTE_METHODS = {
  set: 'set',
  remove: 'remove',
  toggle: 'toggle',
};

const CLASSES = {
  hidden: 'visually-hidden',
};

export const showElement = el => {
  el.classList.remove(CLASSES.hidden);
};

export const hideElement = el => {
  el.classList.add(CLASSES.hidden);
};

export const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

export const handleFetchedData = (data, refs, cb) => {
  if (isNotEmpty(data)) {
    hideElement(refs.loader);
    cb(data);

    return;
  }

  refs.error.textContent =
    'All cats are busy sipping milk, sorry. Try again later';
  throw new Error('No data for this query');
};
