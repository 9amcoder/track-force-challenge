import React from 'react';
import Site from "@/types/site";
import SiteTable from "./SiteTable";

interface SiteContainerProps {
  sites: Site[];
  siteLoading: boolean;
  error: string | null;
}

const SiteContainer: React.FC<SiteContainerProps> = ({ sites, siteLoading, error }) => {
  if (siteLoading) {
    return <div>Loading...</div>; // Replace with a spinner or loading component later
  }

  if (error) {
    return <div>Error: {error}</div>; // Provide more context if needed
  }

  if (!sites || sites.length === 0) {
    return <div>No sites available</div>;
  }

  return (
    <div>
      <SiteTable sites={sites} />
    </div>
  );
}

export default SiteContainer;