import React from "react";
import Site from "@/types/site";
import SiteTable from "./SiteTable";
import SkeltonLoader from "../ui/SkeletonLoader";
import PaginationContainer from "../ui/Pagination";
import DropdownFilter from "../ui/DropdownFilter";

interface SiteContainerProps {
  sites: Site[];
  siteLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSortChange: (sort: string, order: string) => void;
}

const SiteContainer: React.FC<SiteContainerProps> = ({
  sites,
  siteLoading,
  error,
  currentPage,
  totalPages,
  onPageChange,
  onSortChange,
}) => {
  if (siteLoading) {
    return <SkeltonLoader />;
  }

  if (error) {
    return <div>Error: {error}</div>; // Provide more context if needed
  }

  if (!sites || sites.length === 0) {
    return <div>No sites available</div>;
  }

  return (
    <>
    <div className="text-left pb-2">
    <DropdownFilter onSortChange={onSortChange} />
  </div>
    <div>
    
      <SiteTable sites={sites} />
      <PaginationContainer
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
    </>
  );
};

export default SiteContainer;
