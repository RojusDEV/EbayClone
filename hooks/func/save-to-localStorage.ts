"use client"
function SaveToLocalStorage<T>(key: string, value: T) {
  const items = localStorage.getItem(key);
  const parsed = items ? JSON.parse(items) : [];
  const removeDuplicated = new Set(parsed);
  if(!removeDuplicated.has(value)) {
    localStorage.setItem(key, JSON.stringify([...parsed, value]));
  }
  if(parsed.length === 0) {
    localStorage.setItem(key, JSON.stringify([value]));
  }
}


export default SaveToLocalStorage;