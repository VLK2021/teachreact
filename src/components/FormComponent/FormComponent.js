import React, {useRef} from 'react';


const FormComponent = () => {
    const nameRef = useRef();
    const cityRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();

        const currentName = nameRef.current.value;
        const currentCity = cityRef.current.value;

        const userObject = {
            name: currentName,
            city: currentCity,
        }

        console.log(userObject);

        nameRef.current.value = '';
        cityRef.current.value = '';
    }


    return (
        <div className={'formComponent'}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" required id={'name'} ref={nameRef}/>

                <label htmlFor="city">City:</label>
                <input type="text" required id={'city'} ref={cityRef}/>

                <button>submit</button>
            </form>
        </div>
    );
};

export default FormComponent;