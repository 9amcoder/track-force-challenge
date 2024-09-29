import { beforeAll, expect, test, vi } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import Page from "../../app/(dashboard)/(routes)/scheduling/page";
import useMediaQuery from "@/hooks/useMediaQuery";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: query === "(max-width: 640px)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
});

test("Dashboard Page renders without crashing", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Sites" })
  ).toBeDefined();
});

test("should return correct device type and dimensions", () => {
  const { result } = renderHook(() => useMediaQuery());

  expect(result.current.device).toBe("mobile");
  expect(result.current.isMobile).toBe(true);
  expect(result.current.isTablet).toBe(false);
  expect(result.current.isDesktop).toBe(false);
  expect(result.current.width).toBe(window.innerWidth);
  expect(result.current.height).toBe(window.innerHeight);
});