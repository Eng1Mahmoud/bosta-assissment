"use server";
import { fetchApi } from "@/lib/api";
import { ActionState } from "../types/action";
import { User } from "../types/auth";
import { loginSchema, LoginFormValues, signupSchema, SignupFormValues } from "../schemas/auth";
import { validateData } from "@/lib/validation";
import { getFormDataObject } from "@/lib/utils";
import { cookies } from "next/headers";

export async function loginAction(
  prevState: unknown,
  formData: FormData
): Promise<ActionState<{ token: string; username: string; displayName: string }>> {
  const rawData = getFormDataObject<LoginFormValues>(formData);
  const validated = validateData(loginSchema, rawData);

  if (!validated.success) {
    return {
      error: "Validation failed",
      fieldErrors: validated.errors,
    };
  }

  const { username, password } = validated.data;

  const result = await fetchApi<{ token: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (result.error || !result.data?.token) {
    return { error: result.error || "Invalid username or password" };
  }

  const token = result.data.token;
 
  // Set cookie for middleware protection
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  // Fetch full user details to get the name
  // Since FakeStoreAPI doesn't return user details on login, we fetch all users and find the matching one.
  // also token is not actually used for authentication in this fake API, but in a real app it would be sent in the Authorization header for authenticated requests.
  // if token valid we decode it to get user info but since it's fake we just simulate that part.
  // In a real application, the login endpoint would return user details along with the token.
  const usersResult = await fetchApi<User[]>("/users");
  let displayName = username;
  if (usersResult.data) {
    const user = usersResult.data.find((u) => u.username === username);
    if (user && user.name) {
      displayName = `${user.name.firstname} ${user.name.lastname}`;
    }
  }

  return {
    success: true,
    data: {
      token,
      username,
      displayName,
    },
  };
}

export async function signupAction(
  prevState: unknown,
  formData: FormData
): Promise<ActionState<{ message: string }>> {
  const rawData = getFormDataObject<SignupFormValues>(formData);
  const validated = validateData(signupSchema, rawData);

  if (!validated.success) {
    return {
      error: "Validation failed",
      fieldErrors: validated.errors,
    };
  }

  // Artificial delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Since FakeStoreAPI has no signup endpoint, we simulate a successful 
  // registration and inform the user to log in.
  return {
    success: true,
    data: {
      message: "Registration successful! Please log in with your credentials.",
    },
  };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  return { success: true };
}
