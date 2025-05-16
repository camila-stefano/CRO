const getTrendingsElements = () => {
  const trendingColors = {
    TH23FTEL: ["Navy/White", "White/Navy"],
    TH24ATEFB: ["Navy/White", "Charcoal/White"],
    TH25ATP: ["Red/White", "White/Navy"],
    TH25ATPM: ["Blue Bird/White", "Charcoal/White"],
    TH23ATB: ["Black/White", "Navy/White"],
    TH25ATR: ["White/Navy/Red", "White/Soft Pink"],
    TH23ATF: ["Navy/White", "Vintage Blue/White"],
    TH25VTP: ["Blue Bird/White", "White/Navy/Red"],
    TH24TAUS: ["White/Black", "Blue Bird/Navy"],
    TH24APT: ["Black/White", "Navy/White"],
    TH24VPCL: ["Black/White", "Navy/White"],
    TH25APBM: ["Charcoal/White", "Hunter/White"],
    TH24AMTA: ["White/Black", "Black/Black"],
    TH25AMTLW: ["Black//Black/White", "Blue Bird/Blue Bird/White"],
    TH24ACHBZ: ["Burgundy/Navy/White", "Gray/Black/White"],
    TH23ABR: ["Washed Indigo/White", "Black/Camo"],
    TH23AO: ["Black/White", "White/Navy/Dark Red"],
    TH23ADGO: ["Eucalyptus/Lemon", "White/Soft Pink/Burgundy"],
    TH24ASCR: ["Burgundy/Black/White", "Navy/Navy/White"],
    TH25ALG: ["Navy"],
    TH25AWTP: ["Lemon/Marble/White", "Marble/Soft Pink/White"],
    TH25AWPBM: ["Blue Bird/Washed Indigo/White", "Charcoal/Lemon"],
    TH23AWBR: ["Indigo/Bluebird/White"],
    TH24AWCHBZ: ["Heather/White", "Heather/Navy"],
    TH23WSV: ["White/Black", "White/Soft Pink/Marble"],
    TH25AJRTP: ["Blue Bird/Navy", "Eucalyptus/White"],
    TH23AJBR: ["White/Blue Bird/Soft Pink", "White/Washed Indigo/Gray"],
    TH22CHAUS: ["Blue Bird/White", "White/Black"],
    TH22BRZB: ["Blue/White/Washed Indigo"],
    TH24FTETF: [
      "C/W 7",
      "C/W 7 1/8",
      "C/W 7 1/4",
      "C/W 7 3/8",
      "C/W 7 1/2",
      "C/W 7 5/8",
      "C/W 7 3/4",
      "C/W 7 7/8",
      "C/W 8",
      "N/W 6 7/8",
      "N/W 7 1/8",
      "N/W 7 1/4",
      "N/W 7 3/8",
      "N/W 7 1/2",
      "N/W 7 5/8",
      "N/W 7 3/4",
      "N/W 7 7/8",
      "N/W 8",
      "N/W 7",
    ],
  };

  const getCode = () => {
    const url = window.location.href;
    const params = url.split("/");
    const lastParam = params[params.length - 1];
    const code = lastParam.split(".")[0];
    return code;
  };

  const getTrendingCodes = () => {
    const mainSKU = getCode();
    return trendingColors[mainSKU] || [];
  };

  const trending = getTrendingCodes();

  const swatches = document.querySelectorAll(
    '.swatches a[title^="Select Color: "]'
  );

  const matchingAnchors = Array.from(swatches).filter((anchor) => {
    const title = anchor.getAttribute("title");
    const color = title.replace("Select Color: ", "").trim();
    return allowedColors.includes(color);
  });

  return matchingAnchors;
};
