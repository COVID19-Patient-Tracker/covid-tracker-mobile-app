export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
  
    return '';
  };
  
  export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';
    if (password.length < 8) return 'Minimum 8 characters required.';
    return '';
  };
  
  export const nameValidator = (name: string) => {
    if (!name || name.length <= 0) return 'Name cannot be empty.';
  
    return '';
  };

  export const nicValidator = (nic: string) => {
    if (!nic || nic.length <= 0) return 'NIC cannot be empty.';
    if (nic.length < 10) return 'Minimum 10 characters required.';
  
    return '';
  };

  export const idValidator = (id: string) => {
    const re = /^[0-9]*$/;
    if (!id || id.length <= 0) return 'ID cannot be empty.';
    if (!re.test(id)) return 'Only numbers are allowed.';
  
    return '';
  };
  