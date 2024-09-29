import Address from "./address";


/**
 * Represents a contact with personal and address information.
 * 
 * @typedef {Object} Contact
 * @property {string} id - The unique identifier for the contact.
 * @property {string} firstName - The first name of the contact.
 * @property {string} lastName - The last name of the contact.
 * @property {string} email - The email address of the contact.
 * @property {string} phoneNumber - The phone number of the contact.
 * @property {string} jobTitle - The job title of the contact.
 * @property {Address} address - The address details of the contact.
 */
type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  address: Address;
};

export default Contact;