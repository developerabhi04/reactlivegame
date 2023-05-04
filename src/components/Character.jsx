import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/node/styles";
import { useState } from "react";



const Image = styled('img')({
    width: '100%',
    height: 300,
})

const Cards = styled(Card)`
    width: 250px;
    margin: 10px;
    position: relative;
`;

const Container = styled(Box)`
    position: absolute;
    top: 0;
    color: #fff;
    height: 300px;
    width: 100%;
    background: #000;
    opacity: 0.5;

`;


const Character = ({ value }) => {
    const [toggle, setToggle] = useState(false);

    const ToggleHover = () => {
        setToggle(!toggle);
    }


    return (

        value.characterImageFull ?
            <Cards onMouseEnter={ToggleHover} onMouseLeave={ToggleHover}>
                <Image src={value.characterImageFull} alt="Picture" />
                {
                    toggle ?
                    <Container>
                        <Typography>Name: {value.characterName}</Typography>
                        <Typography>Real Name: {value.actorName}</Typography>
                        <Typography>House: {value.houseName}</Typography>
                        <Typography>Nickname: {value.nickName}</Typography>
                    </Container>
                    : ''
                }
            </Cards>
            : ''

    )
}

export default Character;