const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    if (!BASE_URL && !endpoint.startsWith("http")) {
      throw new Error("API base URL is not configured");
    }

    const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Received non-JSON response from API");
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
