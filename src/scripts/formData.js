export function formData(obj) {
    const formElements = Array.from(obj.elements);
    const formValues = {};
    formElements.forEach(element => {
        if(element.name) {
            formValues[element.name] = element.value;
        }
    });
    return formValues;
};