// src/services/authService.js

export const loginUser = async (email, password) => {
  try {
    const response = await fetch("http://localhost:9090/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.text(); // backend returns a message
      return { success: true, message: data };
    } else {
      const errorMsg = await response.text();
      return { success: false, message: errorMsg };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Server error. Please try again later." };
  }
};
