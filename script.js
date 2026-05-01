const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");
const amountInput = document.getElementById("amount");

// Currency → Country Code Map
const currencyToCountry = {
  USD: "US",
  EUR: "EU",
  GBP: "GB",
  PKR: "PK",
  INR: "IN",
  AUD: "AU",
  CAD: "CA",
  JPY: "JP",
  CNY: "CN",
  AED: "AE",
  TRY: "TR",
  SAR: "SA",
  NZD: "NZ",
  CHF: "CH",
  SGD: "SG",
  MYR: "MY",
  ZAR: "ZA"
};

// Fetch and populate currency list
async function populateCurrencies() {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await res.json();
  const currencies = Object.keys(data.rates);

  currencies.forEach(currency => {
    if (currencyToCountry[currency]) {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.text = currency;
      fromCurrency.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = currency;
      option2.text = currency;
      toCurrency.appendChild(option2);
    }
  });

  fromCurrency.value = "USD";
  toCurrency.value = "PKR";

  updateFlag(fromCurrency, fromFlag);
  updateFlag(toCurrency, toFlag);
}

// Update flag when dropdown changes
function updateFlag(selectElement, flagImg) {
  const countryCode = currencyToCountry[selectElement.value];
  flagImg.src = `https://flagsapi.com/${countryCode}/flat/32.png`;
}

fromCurrency.addEventListener("change", () => updateFlag(fromCurrency, fromFlag));
toCurrency.addEventListener("change", () => updateFlag(toCurrency, toFlag));

populateCurrencies();

// Convert currency
convertBtn.addEventListener("click", async () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await res.json();
  const rate = data.rates[to];

  const converted = (amount * rate).toFixed(2);
  resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
});
