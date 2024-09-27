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
  const { sites, siteLoading, error, fetchSites } = useSiteStore();

  useEffect(() => {
    fetchSites();
  }, [fetchSites]);

  if (siteLoading) {
    return <div>Loading...</div>; // Replace with a spinner or loading component if available
  }

  if (error) {
    return <div>Error: {error}</div>; // Provide more context if possible
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <SiteContainer sites={sites} />
    </div>
  );
};

export default Dashboard;