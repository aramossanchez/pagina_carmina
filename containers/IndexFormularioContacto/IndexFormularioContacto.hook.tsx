import { useEffect, useState } from "react";

export function UseIndexFormularioContacto() {

  const [selectedCenter, setSelectedCenter] = useState(0);

  type FormData = {
    [key: string]: string | boolean;
    name: string;
    phone: string;
    email: string;
    text: string;
    checked: boolean;
  };

  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    text: '',
    checked: false
  });

  const [validationError, setValidationError] = useState({
    name: false,
    phone: false,
    email: false,
    text: false,
    checked: false
  });

  const setFieldOfForm = (field: string, value: string | boolean) => {
    const copyOfForm = structuredClone(form);
    copyOfForm[field] = value;
    setForm(copyOfForm);
  }

  const sendMail = () => {
    const mailtoLink = `mailto:contactoweb@carminazamora.com?subject=${encodeURIComponent('Formulario web - ' + form.name)}&body=--------------------------------------------------%0D%0AFormulario rellenado desde la web.%0D%0A--------------------------------------------------%0D%0A%0D%0ANombre: ${form.name} %0D%0A%0D%0ATeléfono de contacto: ${form.phone} %0D%0A%0D%0AEmail de contacto: ${form.email} %0D%0A%0D%0AMotivo de mi consulta:%0D%0A${form.text}`;
    window.location.href = mailtoLink;
  }

  const validateForm = (form: FormData) => {

    const errorChecks = structuredClone(validationError);

    const normalTextRgx = /^.{3,}$/;
    const phoneRgx = /^\d{9,}$/;
    const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const keys = Object.keys(form);

    keys.forEach(key => {
      switch (key) {
        case 'name':
        case 'text':
          errorChecks[key] = !normalTextRgx.test(form[key]);
          break;
        case 'phone':
          errorChecks[key] = !phoneRgx.test(form[key]);
          break;
        case 'email':
          errorChecks[key] = !emailRgx.test(form[key]);
          break;
        case 'checked':
          errorChecks[key] = !form[key];
          break;

        default:
          break;
      }
    });
    setValidationError(errorChecks);

    const checkedForm = Object.values(errorChecks).some(value => value === true);
    if (!checkedForm) {
      sendMail();
    }


  }

  return { selectedCenter, setSelectedCenter, validationError, form, setFieldOfForm, validateForm }
}