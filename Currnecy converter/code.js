const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  const BASE_URL= 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/';

  let dropdowns = document.querySelectorAll(".dropdowns select");

  const btn = document.querySelector("button");

  let fromCurr = document.querySelector(".from select ");
  let toCurr = document.querySelector(".to select");
  let amt = document.querySelector(".amount input");
  let msg = document.querySelector(".msg")


 

  // for(key in countryList ){
  //   console.log(key, countryList[key] );
  // }
console.log(dropdowns);

for(let selects of dropdowns){
   for(let currCode in countryList){
     let newOption= document.createElement("Option");
     newOption.innerText=currCode;
     newOption.value=currCode;
     selects.append(newOption);
     if(selects.name==='from' && currCode ==='USD'){
      newOption.selected='selected';
     }
     else if(selects.name==='to' && currCode ==='PKR'){
        newOption.selected='selected';
       }
     }



   }

   for(let i=0 ;i<2;i++){
   dropdowns[i].addEventListener("change",(evt)=>{
     updateFlag(evt.target);
   // console.log(evt.target.value);

   })
  }

 function updateFlag(element){
   let currCode= element.value;
   let countryCode= countryList[currCode];
   let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src= newSrc;

}

const updateMsg = (data) => {
  console.log(data);
  let exchangeRate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()] ;
  console.log(exchangeRate);
  let result = exchangeRate * amt.value;
  result= Math.round(result * 100)/100; // rounding off to 2 decimal places 
  console.log(result);
  msg.innerText= `${amt.value} ${fromCurr.value} = ${result} ${toCurr.value}`;  
}




 btn.addEventListener("click", async (evt)=>{
   evt.preventDefault();

  //  let amt = document.querySelector(".amount input");
   if(amt.value <= 0 || amt.value==='' ){
    amt.value=1;
   }

    const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}.json`;
  //const URL= `${BASE_URL}usd.json`;


   let response = await fetch(URL);
    console.log(response);
   let data = await response.json();
   

  updateMsg(data);
   

 })

   
  
  






