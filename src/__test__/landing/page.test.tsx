/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, test, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/(landing)/page";

// Mock the canvas element
beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    fillStyle: "",
    fillRect: vi.fn(),
    clearRect: vi.fn(),
    getImageData: vi.fn(),
    putImageData: vi.fn(),
    createImageData: vi.fn(),
    setTransform: vi.fn(),
    drawImage: vi.fn(),
    save: vi.fn(),
    fillText: vi.fn(),
    restore: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn(),
    stroke: vi.fn(),
    translate: vi.fn(),
    scale: vi.fn(),
    rotate: vi.fn(),
    arc: vi.fn(),
    arcTo: vi.fn(),
    rect: vi.fn(),
    clip: vi.fn(),
  })) as any;
});
// Mock @react-three/fiber and @react-three/drei
vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useFrame: vi.fn(),
  Group: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock Group component with uppercase name
}));

vi.mock("@react-three/drei", () => ({
  Points: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  PointMaterial: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

test("Landing Page renders without crashing", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Trackforce" })
  ).toBeDefined();
});
