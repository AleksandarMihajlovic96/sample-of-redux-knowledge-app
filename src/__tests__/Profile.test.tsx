import Profile from "../components/Profile";
import { render, screen } from "@testing-library/react";

test("loads and display Profile heading", async () => {
  const profileHeading = "This is Profile component.";
  render(<Profile />);
  expect(screen.getByText(profileHeading)).toBeInTheDocument();
});
