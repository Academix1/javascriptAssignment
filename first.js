if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
