import React from "react";
import Card from "../../components/controls/Card";




const buildParagraph = (text) => {

    return (
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
    )
}

const buildEmoji = (text) => {
    return (
        <p className="text-emoji">{text}</p>
    )
}

const buildCard = (card, options) => {

    const { title } = card;
    const { description } = card;
    const { icons } = card;
    const { background } = options;
    const { color } = options;
    




    return (
        <Card icons={icons} background={background} color={color} title={title} description={description}></Card>
    )

}

export const buildPart = (part, options) => {

    if (part.type === "paragraph") {
        return buildParagraph(part.content);
    }

    if (part.type === "text-emoji") {
        return buildEmoji(part.content);
    }

    if (part.type === "card") {
        return buildCard(part.content,options);
    }
}


export const buildParts = (parts, options = null) => {

    const parsed = parts.map((part, index) => {

        return (
            buildPart(part,options)
        )
    })
    return (
        [
            parsed
        ]
    )
}