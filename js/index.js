// https://api.restful-api.dev/objects
const loadPhone = async(searchPhone) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
const data = await res.json();
const phones = data.data;
displayPhones(phones);

}

const displayPhones = phones =>{
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  p-4`;
        phoneCard.innerHTML = `
        <div class="card  bg-base-100 ">
        <figure><img src="${phone.image}" alt="Iphone" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`
      phoneContainer.appendChild(phoneCard);

    })
}

// Search ................................................
const handleSearch = () =>{
   const searchFiele = document.getElementById('search-field');
   const searchPhone = searchFiele.value;
   searchFiele.value = '';
  
   loadPhone(searchPhone);
}
// loadPhone();