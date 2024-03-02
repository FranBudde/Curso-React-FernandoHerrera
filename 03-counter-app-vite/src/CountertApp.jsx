import PropTypes from 'prop-types'
import { useState } from "react";

export const CounterAPP = ({ value }) => {

    const [ counter, setCounter ] = useState( value ); // hook el nombre del hook siempre tiene que empezar con use

    // const hadleAdd = () => setCounter( counter + 1 );
    const hadleAdd = () => setCounter( (c) => c + 1);
    
    const hadleDiscount = () => setCounter( counter - 1);
    
    const hadleReset = () => setCounter( value );

    return(
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={ hadleAdd }> +1 </button>
            <button onClick={ hadleDiscount }> -1 </button>
            <button aria-label='btn-reset' onClick={ hadleReset }> Reset </button>
        </>
    );
};


CounterAPP.propTypes = {
    value: PropTypes.number.isRequired,
}


