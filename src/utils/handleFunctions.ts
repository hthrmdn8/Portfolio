const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};

const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    console.log("Button Clicked", event, id);
};

function handleFormChanges(event: React.ChangeEvent<HTMLInputElement>, setStateFunction: React.SetStateAction<string>) {
    // setStateFunction(event.target.value)
    console.log(event.target.value)
}
// const handleFormChanges = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     setStateFunction: React.SetStateAction<string>
//     ) => {
//     setStateFunction(event.target.value)
//     }


export default handleFormChanges;