# Currency_Convertor
This Currency Converter is a web-based application that I developed in my 3rd semester to practice real-world frontend development and API integration. The project allows users to enter an amount, choose source and target currencies, and instantly get the converted value. It also displays country flags beside selected currencies to make the interface more intuitive and user-friendly.

Technical Overview

The project is built using core web technologies:

HTML5 for page structure and form elements
CSS3 for layout, styling, and responsive alignment
Vanilla JavaScript for DOM manipulation, asynchronous API calls, and conversion logic
How it works:

On initial load, the app fetches exchange rate data from the ExchangeRate API.
It extracts available currency codes and populates both currency dropdown menus.
A predefined currency-to-country mapping is used to render flag images dynamically through a flag API.
When the user clicks Convert, the app fetches the latest base-currency rates, calculates the target value, and displays the formatted result.
Input validation ensures that invalid or empty amounts are handled gracefully.
Key technical concepts used:

Asynchronous programming with async/await and fetch
Dynamic DOM updates for select options, flags, and result text
Event-driven programming using change and click event listeners
Data formatting and numeric precision handling with toFixed
Modular logic through reusable utility functions like flag updates
Learning Outcomes

Through this 3rd semester project, I strengthened my understanding of API consumption, JavaScript event handling, DOM-based UI rendering, and practical frontend problem-solving by building a complete, interactive mini application.
<img width="488" height="353" alt="image" src="https://github.com/user-attachments/assets/ee0002fe-e7d5-4de7-bd44-998520fe2ae2" />
