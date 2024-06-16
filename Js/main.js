const inputElements = document.querySelectorAll(".card__input");
const submitElement=document.querySelector(".card__button");

const dayElement = document.querySelector('.card__input[name="day"]');
const monthElement = document.querySelector('.card__input[name="month"]');
const yearElement = document.querySelector('.card__input[name="year"]');
const resultElement = document.querySelector(".card__resultValue");

const isValidateDay=(day)=>{
  if(day && day>0 && day<=31){
    return true;
  }
};

const isValidateMonth=(month)=>{
  if(month && month>0 && month<=12){
    return true;
  }
};

const isValidateYear=(year)=>{
  const currentYear = new Date().getFullYear();
  if(year && year>0 && year<=currentYear){
    return true;
  }
};

const isDateValid = (dayElement, monthElement, yearElement)=>{
  const isValid=[false,false,false];
  if(!isValidateDay(dayElement.value)){
    dayElement.classList.add("card__input--error");
  }else{
    isValid[0]=true;
    dayElement.classList.remove("card__input--error");
  }
  if(!isValidateMonth(monthElement.value)){
    monthElement.classList.add("card__input--error");
  }else{
    isValid[1]=true;
    monthElement.classList.remove("card__input--error");
  }
  if(!isValidateYear(yearElement.value)){
    yearElement.classList.add("card__input--error");
  }else{
    isValid[2]=true;
    yearElement.classList.remove("card__input--error");
  }
  return isValid.every((item) => item === true);
};

// Function CalculateAge
const calculateAge = (year, month, day) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };


// Function ClickHandler
const onClickHandler = () => {
  if (!isDateValid(dayElement, monthElement, yearElement)) {
    resultElement.textContent = "--";
    return;
  }
    resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value).toString();
};

// run the function when the Enter key is clicked
inputElements.forEach(item=>{
    item.addEventListener('keydown',function(e){
        if(e.key==="Enter"){
            onClickHandler();
        }
    });
})

submitElement.addEventListener('click',onClickHandler);