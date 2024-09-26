import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/(dashboard)/(routes)/dashboard/page";

test("Dashboard Page renders without crashing", () => {
    render(<Page />);
    expect(
        screen.getByRole("heading", { level: 1, name: "Dashboard" })
    ).toBeDefined();
});