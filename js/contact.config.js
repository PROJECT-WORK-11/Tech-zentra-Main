export const contactConfig = {
  /*
   * Required for live enquiries.
   * Set this to your real form endpoint, for example: "https://example.com/api/contact".
   * The form sends JSON and expects a 2xx response before showing a success message.
   * Leave it empty until the backend exists; the form will show a failure message
   * instead of pretending the enquiry was sent.
   */
  endpoint: "",
  method: "POST",

  /*
   * Add verified details here when they are available.
   * Empty values are not rendered on the page.
   */
  details: {
    email: "",
    phone: "",
    address: "",
    hours: "",
  },
};
