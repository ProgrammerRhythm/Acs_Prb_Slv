function fixHashtag(input) {
    const fixedHashtag = input.replace(/\s+/g, '');
    console.log(fixedHashtag);
  }
  
  const input = "#Acs is love";
  fixHashtag(input);
  