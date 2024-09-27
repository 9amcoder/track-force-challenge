"use client";
import React, { useEffect } from "react";
import SiteContainer from "@/components/dashboard/content/SiteContainer";
import useSiteStore from "@/store/siteStore";

/**
 * Dashboard component that displays the list of sites.
 * 
 * @returns {JSX.Element} The rendered component.
 */
const Dashboard: React.FC = () => {
  const { sites, sitesLoading, error, fetchSites } = useSiteStore();

  useEffect(() => {
    fetchSites();
  }, [fetchSites]);

  return (
    <div>
      <h1>Dashboard</h1>
      <SiteContainer sites={sites} siteLoading={sitesLoading} error={error}/>
    </div>
  );
};

export default Dashboard;