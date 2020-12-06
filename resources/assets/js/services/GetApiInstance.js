const GetApiInstance = async (url, method = 'GET', data = null) => {
  const token = document.head.querySelector('meta[name="csrf-token"]');

  const initOptions = {
    method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-TOKEN': token && token.content,
    },
  };

  const initOptionsWithData = {
    ...initOptions,
    body: JSON.stringify(data),
    headers: { ...initOptions.headers, 'Content-Type': 'application/json' },
  };

  const options = data ? initOptionsWithData : initOptions;

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};

export default GetApiInstance;
