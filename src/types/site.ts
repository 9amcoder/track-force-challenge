import Contact from "./contact";

/**
 * Represents a Site entity.
 * 
 * @typedef {Object} Site
 * @property {string} id - The unique identifier for the site.
 * @property {string} clientId - The unique identifier for the client.
 * @property {string} title - The title of the site.
 * @property {Date} createdAt - The date when the site was created.
 * @property {Date} updatedAt - The date when the site was last updated.
 * @property {Object} contacts - The contacts associated with the site.
 * @property {Contact} contacts.main - The main contact for the site.
 * @property {Object} address - The address of the site.
 * @property {string} address.zipCode - The zip code of the site.
 * @property {string} address.city - The city of the site.
 * @property {string} address.street - The street of the site.
 * @property {string} address.country - The country of the site.
 * @property {string} address.state - The state of the site.
 * @property {string[]} images - The images of the site.
 * @property {string[]} tags - The tags associated with the site.
 */

type Address = {
  zipCode: string;
  city: string;
  street: string;
  country: string;
  state: string;
};

type Site = {
  id: string;
  clientId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: {
    main: Contact;
  };
  address: Address;
  images: string[];
  tags: string[];
};

export default Site;