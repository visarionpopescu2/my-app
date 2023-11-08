
export const httpRequest = async (url: string, method: string, payload?: any) => {
  const response = await fetch(
    url,
    {
      method,
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload)
    }
  );

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return { data };
  }
  
  throw new Error(`error ${response.status}`);
}
