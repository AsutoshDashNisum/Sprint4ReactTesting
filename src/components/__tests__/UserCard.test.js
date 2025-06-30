
// src/components/__tests__/UserCard.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserCard from "../UserCard";
import * as userService from "../../services/userService";

describe("UserCard", () => {
  const mockUser = { name: "Asutosh", email: "asutosh@example.com" };

  it("calls getUserById and displays user info", async () => {
    // Spy and mock the getUserById function
    const spy = jest.spyOn(userService, "getUserById").mockResolvedValue(mockUser);

    render(<UserCard userId={1} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/sanya/i)).toBeInTheDocument();
      expect(screen.getByText(/sanya@example.com/i)).toBeInTheDocument();
    });

    expect(spy).toHaveBeenCalledWith(1);
    spy.mockRestore(); // cleanup
  });
});
