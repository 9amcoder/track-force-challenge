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
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import formatAddress from "@/helper/addressFormatter";

interface TableProps {
  sites: Site[];
  router?: AppRouterInstance;
  isMobile?: boolean;
}

const SiteTable: React.FC<TableProps> = ({ sites, router, isMobile }) => {
  return (
    <Table>
      {!isMobile && (
        <TableHeader>
          <TableRow>
            <TableHead
              className="w-[20px] md:w-[100px]"
              aria-label="Image"
            ></TableHead>
            <TableHead aria-label="Title">Title</TableHead>
            <TableHead aria-label="Address">Address</TableHead>
            <TableHead aria-label="Contact">Contact</TableHead>
          </TableRow>
        </TableHeader>
      )}
      <TableBody>
        {sites.map((site) => (
          <TableRow
            key={site.id}
            onClick={() => isMobile && router?.push(`/scheduling/${site.id}`)}
            className={isMobile ? "cursor-pointer" : ""}
          >
            <TableCell>
              <Avatar>
                <AvatarImage src={site.images[0] || ""} alt="Site Image" />
                <AvatarFallback>SI</AvatarFallback>
              </Avatar>
            </TableCell>
            {isMobile ? (
              <TableCell>
                <div>
                  <strong>Title:</strong> {site.title || "No Title"}
                </div>
                <div>
                  <strong>Address:</strong> {formatAddress(site.address)}
                </div>
                <div>
                  <strong>Contact:</strong> {site.contacts?.main?.lastName || "N/A"},{" "}
                  {site.contacts?.main?.firstName || "N/A"}
                </div>
              </TableCell>
            ) : (
              <>
                <TableCell>{site.title || "No Title"}</TableCell>
                <TableCell>{formatAddress(site.address)}</TableCell>
                <TableCell>
                  {site.contacts?.main?.lastName || "N/A"},{" "}
                  {site.contacts?.main?.firstName || "N/A"}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => router?.push(`/scheduling/${site.id}`)}
                  >
                    <GalleryVerticalEnd size={15} className="mr-2" />
                    Details
                  </Button>
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SiteTable;