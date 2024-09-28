"use client";
import React, { useEffect, useState } from "react";
import SiteContainer from "@/components/dashboard/content/SiteContainer";
import useSiteStore from "@/store/siteStore";

const Dashboard: React.FC = () => {
  const { sites, sitesLoading, error, fetchSites, currentPage, totalPages } = useSiteStore();
  const [page, setPage] = useState(currentPage);
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchSites(page, 10, sort, order);
  }, [fetchSites, page, sort, order]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSortChange = (newSort: string, newOrder: string) => {
    setSort(newSort);
    setOrder(newOrder);
  };

  return (
    <div className="mt-2 ml-2">
      <h1 className="text-center pb-2"> Sites </h1>
      <SiteContainer
        sites={sites}
        siteLoading={sitesLoading}
        error={error}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default Dashboard;