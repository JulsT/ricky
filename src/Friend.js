import React from 'react';
import styled from 'styled-components';
const Friend = (props) => {

    const Info = styled.div`
    width: 160px;
    height: 300px;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px; 
    background-color: rgb(248, 238, 226);
    border-radius: 25px;
    flex-wrap: wrap;
  `;

    const Photo = styled.img`
    display:block;
    margin-left: auto;
    margin-right: auto
  `;

    const Name = styled.h3`
    text-align: center;
    font - size: 14px;
    color: #099389;
    text-transform: uppercase;
    border-bottom: 1px dashed  #03D8E3
    `;

    const Text = styled.p`
    text-align: center;
    font-size: 12px;
    color: #4a5353;
    text-transform: uppercase
  `;

    const { name, picture, gender, age, city, phone } = props;
    return (
        <Info >
            <Photo src={picture} alt="friend ava" />
            <Name>
                {name}
            </Name>
            <Text>
                {gender}
            </Text>
            <Text>
                I am {age} years old
            </Text>
            <Text>
                I live in {city}
            </Text>
            <Text>
                Call me: {phone}
            </Text>
        </Info>
    );
}

export default Friend
