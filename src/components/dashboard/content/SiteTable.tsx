import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Site from "@/types/site";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TableProps {
  sites: Site[];
}

const formatAddress = (address: {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}): string => {
  if (!address) return "Address not available";
  return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}, ${address.country}`;
};

const SiteTable: React.FC<TableProps> = ({ sites }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20px] md:w-[100px]" aria-label="Image"></TableHead>
          <TableHead aria-label="Title">Title</TableHead>
          <TableHead aria-label="Address">Address</TableHead>
          <TableHead aria-label="Contact">Contact</TableHead>
          <TableHead className="text-right" aria-label="Action">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sites.map((site) => (
          <TableRow key={site.id}>
            <TableCell>
              <Avatar>
                <AvatarImage src={site.images[0] || ""} alt="Site Image" />
                <AvatarFallback>SI</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{site.title || "No Title"}</TableCell>
            <TableCell>{formatAddress(site.address)}</TableCell>
            <TableCell>
              {site.contacts?.main?.lastName || "N/A"}, {site.contacts?.main?.firstName || "N/A"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SiteTable;