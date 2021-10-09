export const checkForSensitiveInfo = (str: string): boolean => {
  const checkForDollar = /(\$\s?[1-9])/;
  const checkForEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const checkForContact =
    /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;

  const moreThan6Words = (str: string) => {
    const arr = str.split(" ");
    let counter = 0;
    for (let word of arr) {
      if (word.length > 3) {
        counter++;
        if (counter > 6) return true;
      }
    }
    return false;
  };

  return (
    checkForDollar.test(str) ||
    checkForEmail.test(str) ||
    checkForContact.test(str) ||
    moreThan6Words(str)
  );
};
