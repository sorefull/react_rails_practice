const ENDPOINT_ITEMS = '/api/items/'

const apiIndexItems = () => {
  return fetch(ENDPOINT_ITEMS)
}

const apiCreateItem = (body) => {
  return fetch(ENDPOINT_ITEMS, {body, method: 'POST', headers: {'Content-Type': 'application/json'}})
}

const apiDeleteItem = (id) => {
  return fetch(ENDPOINT_ITEMS + id, {method: 'DELETE'})
}

const apiUpdateItem = (body, id) => {
  return fetch(ENDPOINT_ITEMS + id, {body, method: 'PATCH', headers: {'Content-Type': 'application/json'}})
}

const apiBuildJson = (myForm) => {
  let object = {}
  let formData = new FormData(myForm)
  formData.forEach(function(value, key) {object[key] = value})
  return JSON.stringify({item: object})
}
