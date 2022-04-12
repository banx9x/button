import React from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    icon: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ icon }) => {
    return <button>LoL</button>;
};

export default Button;
