import React from 'react';
import Site from "@/types/site";
import SiteTable from "./SiteTable";

interface SiteContainerProps {
  sites: Site[];
}

const SiteContainer: React.FC<SiteContainerProps> = ({ sites }) => {
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