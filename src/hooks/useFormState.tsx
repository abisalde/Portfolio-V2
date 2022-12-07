import * as React from "react";
import { toast } from "react-toastify";

interface IProps {
  submit: () => Promise<void>;
}

type NameProps = "name" | "email" | "subject" | "message";

const testEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

export const useFormState = ({ submit }: IProps) => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const omitValue = (key: [NameProps], value: object) =>
    Object.fromEntries(Object.entries(value).filter(([k]) => !key.includes(k as NameProps)));

  const validateInput = (name: NameProps, value: string) => {
    switch (name) {
      case "name":
        if (value.length < 3) {
          setErrors({ ...errors, name: "Name character is too short" });
        } else {
          const newErrors = omitValue(["name"], errors);
          setErrors(newErrors as any);
        }
        break;

      case "email":
        if (!testEmail.test(value)) {
          setErrors({ ...errors, email: "Please enter a valid email address" });
        } else {
          const newErrors = omitValue(["email"], errors);
          setErrors(newErrors as any);
        }
        break;

      case "subject":
        if (value.length < 4) {
          setErrors({ ...errors, subject: "Subject characters/letters is too short" });
        } else {
          const newErrors = omitValue(["subject"], errors);
          setErrors(newErrors as any);
        }

        break;
      case "message":
        if (value.length < 10) {
          setErrors({ ...errors, message: "Soroke!, Try to add more letters" });
        }
        if (value.length > 255) {
          setErrors({ ...errors, subject: "Please try and shape your letters not be more than 255" });
        } else if (value.length > 10 && value.length <= 255) {
          const newErrors = omitValue(["message"], errors);
          setErrors(newErrors as any);
        }

        break;
      default:
        break;
    }
  };

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {
      e.persist();

      const { name, value } = e.target;

      validateInput(name as NameProps, value);

      setValues({ ...values, [name]: value });
    },
    [validateInput],
  );

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
        await submit();
        setErrors({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.info("Form could not be submitting, please fill out the form required fields");
      }
    },
    [submit],
  );

  return {
    errors,
    handleChange,
    handleSubmit,
    values,
  };
};
