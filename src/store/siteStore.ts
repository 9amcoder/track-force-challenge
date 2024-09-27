import Site from "@/types/site";
import { get } from "@/config/axiosConfig";
import { create } from "zustand";
import { AxiosError } from "axios";
import handleApiError from "@/helper/apiErrorHandler";

interface ISiteStore {
  sites: Site[];
  site: Site | null;
  sitesLoading: boolean;
  siteLoading: boolean;
  error: string | null;
  fetchSites: () => void;
  fetchSite: (id: string) => void;
}

const useSiteStore = create<ISiteStore>((set) => ({
  sites: [],
  site: null,
  sitesLoading: false,
  siteLoading: false,
  error: null,

  /**
   * Fetches the list of sites from the API.
   */
  fetchSites: async () => {
    set({ sitesLoading: true, error: null });
    try {
      const { data } = await get<Site[]>("/sites");
      console.log(data);
      set({ sites: data, sitesLoading: false });
    } catch (error) {
      const errorMessage = handleApiError(error as AxiosError);
      set({ error: errorMessage, sitesLoading: false });
    }
  },

  /**
   * Fetches a single site by its ID from the API.
   * 
   * @param {string} id - The ID of the site to fetch.
   */
  fetchSite: async (id: string) => {
    set({ siteLoading: true, error: null });
    try {
      const { data } = await get<Site>(`/sites/${id}`);
      set({ site: data, siteLoading: false });
    } catch (error) {
      const errorMessage = handleApiError(error as AxiosError);
      set({ error: errorMessage, siteLoading: false });
    }
  },
}));

export default useSiteStore;