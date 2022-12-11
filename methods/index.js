export const checkConstraints = async (formData) => {
   const errorObject = {};

   if(formData['age'] < 18 || formData['age'] > 65) {
      errorObject['isAgeContainsError'] = true;
      errorObject['ageErrorText'] = "Age should be greater than equal to 18 and less than equal to 65";
   }

   if(!formData['email'].match('^[A-Za-z0-9._%+-]+@gmail.com')) {
      errorObject['isEmailContainsError'] = true;
      errorObject['emailErrorText'] = "Email should have a pattern of something@gmail.com";
   }

   if(Object.keys(errorObject).length !== 0) throw new Error(JSON.stringify(errorObject));
}