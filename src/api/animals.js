const baseURL = "http://192.168.86.90:3000";

export async function getAnimalCount(searchInput) {
  const response = await fetch(`${baseURL}/animals?title_like=${searchInput}`);
  const data = await response.json();
  return data.length;
}

export async function getAnimals() {
  const response = await fetch(`${baseURL}/animals`);
  const data = await response.json();
  return data;
}
