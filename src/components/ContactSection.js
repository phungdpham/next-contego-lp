import React, { useState } from "react";
import { useRouter } from "next/router";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import Section from "components/Section";
import NoName from "components/NoName";
import FormAlert from "components/FormAlert";
import TextField from "components/TextField";
import Button from "components/Button";
import LoadingIcon from "components/LoadingIcon";
import contact from "util/contact";

function ContactSection(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    console.log(data);

    contact
      .submit(data)
      .then(() => {
        // Clear form
        // reset();
        // Show success alert message
        setFormAlert({
          type: "success",
          message: "Your message has been sent!",
        });
        router.push("/thank-you");
      })
      .catch((error) => {
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-16 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-2/5">
            <NoName
              title={props.title}
              subtitle={props.subtitle}
              strapline={props.strapline}
            />
          </div>
          <div className="lg:w-3/5 p-2 bg-white bg-opacity-10 rounded-xl">
            <div className="bg-white text-black rounded-lg p-6">
              {formAlert && (
                <div className="mb-6">
                  <FormAlert
                    type={formAlert.type}
                    message={formAlert.message}
                  />
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <TextField
                      type="text"
                      label="Name"
                      id="name"
                      name="name"
                      placeholder=""
                      error={errors.name}
                      inputRef={register({
                        required: true,
                      })}
                    />
                  </div>
                  <div>
                    <TextField
                      type="number"
                      label="Phone"
                      id="mobile"
                      name="mobile"
                      placeholder=""
                      error={errors.phone}
                      inputRef={register({
                        required: "Please enter a valid phone number",
                        pattern: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                      })}
                    />
                  </div>
                </div>
                <div />
                <Button
                  type="submit"
                  size="lg"
                  disabled={pending}
                  isBlock={true}
                  startIcon={
                    !pending && (
                      <PaperAirplaneIcon className="opacity-50 inline-block w-5 h-5" />
                    )
                  }
                  className="w-48"
                >
                  {!pending && <>Gọi lại ngay</>}

                  {pending && <LoadingIcon className="w-6" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
