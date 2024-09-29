
/**
 * Represents an address.
 * 
 * @typedef {Object} Address
 * @property {string} zipCode - The zip code of the address.
 * @property {string} city - The city of the address.
 * @property {string} street - The street of the address.
 * @property {string} country - The country of the address.
 * @property {string} state - The state of the address.
 */
type Address = {
    zipCode: string;
    city: string;
    street: string;
    country: string;
    state: string;
  };

export default Address;