import Swal from "sweetalert2";

type ValidMethods = "GET" | "POST" | "PUT" | "DELETE";

export const TOKEN_KEY = "token";

export async function apiService<T = any>(url: string, method: ValidMethods = "GET", rawData?: unknown) {
    const headers: HeadersInit = {};
    const options: RequestInit = {
        method,
        headers,
    };

    if (method === "POST" || method === "PUT") {
        headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(rawData);
    }

    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return new Promise<T>(async (resolve) => {
        try {
            const res = await fetch(url, options);
            const data = await res.json();

            if (res.ok) {
                resolve(data);

                if (data.message) {
                    Swal.fire({
                        icon: "success",
                        text: data.message,
                    });
                }
            } else {
                console.error(data);
                Swal.fire({
                    icon: "error",
                    title: "Oh no",
                    text: data.message,
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oh no",
                text: (error as Error).message,
            });
        }
    });
}

export const GET = <T = any>(url: string) => apiService<T>(url);
export const POST = <T = any>(url: string, data: unknown) => apiService<T>(url, "POST", data);
export const PUT = <T = any>(url: string, data: unknown) => apiService<T>(url, "PUT", data);
export const DELETE = <T = any>(url: string) => apiService<T>(url, "DELETE");