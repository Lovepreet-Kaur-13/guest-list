const API = " https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608";

/* Fetch all guests details */
export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

/* Fetch one guest details */
export async function getGuestById(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
