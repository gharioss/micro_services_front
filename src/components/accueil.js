import axios from "axios";
import React, { useEffect, useState } from "react";

const Accueil = () => {
    const [el, setEl] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(res => {
            setEl(res.data.results)
        })

    }, []);
    return (
        <div>
            { el?.map(function(data) {
                return (
                    <p>
                        Applicant name:  { data?.name }
                    </p>
                )
            }) }
        </div>
    );
};

export default Accueil;