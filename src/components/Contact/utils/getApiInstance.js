const getApiInstance = async (url, method = 'GET', data = null) => {
  const initOptions = { method };

  const initOptionsWithData = {
    ...initOptions,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const options = data ? initOptionsWithData : initOptions;

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};

export default getApiInstance;
