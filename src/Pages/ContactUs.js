import ContactPageComponent from "../Components/ContactPageComponent";

const ContactUsPage = () => {
  const saveContactUsForm = async (values) => {
    const response = await fetch("http://localhost:3002/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      console.log(response);
    }
  };

  return <ContactPageComponent saveContactUsForm={saveContactUsForm} />;
};

export default ContactUsPage;
