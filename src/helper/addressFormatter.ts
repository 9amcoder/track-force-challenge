import Address from "@/types/address";

const formatAddress = (address?: Address): string => {
  if (!address) return "Address not available";

  const {
    street = "Street not available",
    city = "City not available",
    state = "State not available",
    zipCode = "Zip code not available",
    country = "Country not available",
  } = address;

  return `${street}, ${city}, ${state} ${zipCode}, ${country}`;
};

export default formatAddress;