export const generatePassword = (num: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let index = 0; index < characters.length; index++) {
    if (password.length <= num ? num : 10) {
      const str = characters[Math.floor(Math.random() * characters.length)];
      password += str;
    }
  }
  return password;
};
