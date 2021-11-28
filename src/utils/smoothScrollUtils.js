function smoothScroll(id) {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
}

export { smoothScroll };
