const Ingredient = (props) => {
    // gavin's code below-----------------------------------------
    const info = props.info;
    return (
        <>
        <u>{info.label}</u>
        {info.options.map(
            s => <li>{s}</li>
        )}
        <br />
        </>
    )

    // my code below----------------------------------------------
    // const ingredients = props.ingredient;
    // const ingredients_label = ingredients.label;
    // const ingredients_options = ingredients.options;
    // console.log(ingredients_label);

    // return (
    //         <>
    //             <u>{ingredients_label}</u>
    //             <section>
    //                 {ingredients_options.map(option => <li>{option}</li>)}
    //             </section>
    //             <li>Regular Flour</li>
    //             <li>Habanero Tortilla</li>
    //         </>
    // );

}

export default Ingredient;
