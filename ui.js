class UI {
  constructor() {
    this.uiContainer = document.getElementById("displayFetchedData");
    this.city;
    this.defaultCity = "Liverpool";
  }

  populateUI(data) {
    this.uiContainer.innerHTML = `<div class="card mx-auto mt-5" style="width: auto;">
            <div class="card-body justify-content-center">
            
                <h5 class="card-title">${data.name}</h5>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon"/>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>

            </div>
        </div>`;
    if (data.weather[0].description.includes("cloud")) {
      console.log("clouds!!");
      document.body.style.backgroundImage =
        "url(https://www.howitworksdaily.com/wp-content/uploads/2020/05/sky-4237062_1920.jpg)";
    } else if (data.weather[0].description.includes("rain")) {
      console.log("Rain!!");

      document.body.style.backgroundImage =
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c79f526-868a-4f00-ad94-3cb7b694002a/d6scius-e0ff1f1c-167d-4d25-b9b5-b49cb092629a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83Yzc5ZjUyNi04NjhhLTRmMDAtYWQ5NC0zY2I3YjY5NDAwMmEvZDZzY2l1cy1lMGZmMWYxYy0xNjdkLTRkMjUtYjliNS1iNDljYjA5MjYyOWEuZ2lmIn1dXX0.kf5UIRMv8WuvlHXLnqL7xAQAxys4MAbVBU5WoYR-aDo)";
    } else {
      console.log("sun!!");
      document.body.style.backgroundImage =
        "url(https://www.ksnt.com/wp-content/uploads/sites/86/2016/03/sunshine_36366417_ver1.0-8.jpg?w=2560&h=1440&crop=1)";
    }
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
    console.log("saved to LS");
  }

  setDefault() {
    if (localStorage.getItem("city" == null)) {
      console.log(this.defaultCity);
      populateUI(this.defaultCity);
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }
}
