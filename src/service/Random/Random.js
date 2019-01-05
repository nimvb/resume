import React from "react";

export const randomNumber = (min,max) => {

    return Math.floor(min + Math.random() * (max - min));
}