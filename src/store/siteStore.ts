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
  currentPage: number;
  totalPages: number;
  fetchSites: (page?: number, limit?: number, sort?: string, order?: string) => void;
  fetchSite: (id: string) => void;
}

const useSiteStore = create<ISiteStore>((set) => ({
  sites: [],
  site: null,
  sitesLoading: false,
  siteLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,

  fetchSites: async (page = 1, limit = 10, sort = "createdAt", order = "asc") => {
    set({ sitesLoading: true, error: null });
    try {
      const { data, headers } = await get<Site[]>(`/sites?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
      const totalPages = Math.ceil(Number(headers['x-total-count']) / limit);
      set({ sites: data, currentPage: page, totalPages });
    } catch (error) {
      const errorMessage = handleApiError(error as AxiosError);
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ sitesLoading: false });
    }
  },

  fetchSite: async (id: string) => {
    set({ siteLoading: true, error: null });
    try {
      const { data } = await get<Site>(`/sites/${id}`);
      set({ site: data });
    } catch (error) {
      const errorMessage = handleApiError(error as AxiosError);
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ siteLoading: false });
    }
  },
}));

export default useSiteStore;