import { beforeAll, vi } from "vitest";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextRouterMock = require('next-router-mock');

beforeAll(() => {
  vi.mock('next/router', () => nextRouterMock);

  vi.mock('next/navigation', () => {
    const { useRouter } = nextRouterMock;
    const usePathname = () => {
      const router = useRouter();
      return router.pathname;
    };

    const useSearchParams = () => {
      const router = useRouter();
      return new URLSearchParams(router.query);
    };

    return {
      useRouter,
      usePathname,
      useSearchParams
    };
  });
});