// إنشاء عنصر HTML بأي نوع ونص
const createElement = (elementType, text) => {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

// إنشاء صورة مع خاصية alt
const createImage = (url, alt) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  return img;
};

// إنشاء عنصر عنوان مع نص وبيانات لاختبارات Cypress
const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy);
  return header;
};

// إنشاء زر لتبديل ظهور عنصر معين
const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    element.classList.toggle("notVisible");
  });
  return button;
};

// إنشاء تسمية (label) مرتبطة بعنصر إدخال
const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);
  return label;
};

// إنشاء حقل إدخال (input)
const createInput = (name) => {
  const input = document.createElement("input");
  input.name = name;
  input.id = name;
  return input;
};

// إنشاء زر إرسال (submit)
const createSubmitButton = (value) => {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;
  return submit;
};

// تصدير الدوال
export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
