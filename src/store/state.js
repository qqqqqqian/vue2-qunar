let currentCity = '北京'
try {
  if (localStorage.city) {
    currentCity = localStorage.city
  }
} catch (e) {}

export default {
  city: currentCity
}
