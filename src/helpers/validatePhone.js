export const validatePhone = (phoneNumber) => {
    const regexp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/gm;
    const sanitizedPhoneNumber = phoneNumber.toString().trim();

    return regexp.test(sanitizedPhoneNumber);
}