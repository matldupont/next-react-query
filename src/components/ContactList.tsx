import styled from "styled-components";
import { colorMap } from "../utils/colors";

const Item = styled.div`
  border-radius: 8px;
  border: 1px solid #bbb;
  padding: 1rem 1.6rem;

  ${({ color }) => `
    border-color: ${colorMap[color].border};
    background-color: ${colorMap[color].background};

    &:hover {
      background-color: ${colorMap[color].hover};
    }
  `};
`;

const List = styled.div`
  display: grid;
  width: 100%;
  max-width: 60rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;
const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const Address = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
`;

export function ContactList({ children }) {
  return <List>{children}</List>;
}

export function Contact({ contact, color }) {
  const {
    firstName,
    lastName,
    address: { streetAddress, city, state, country, zipCode },
  } = contact;
  const fullName = `${firstName} ${lastName}`;
  const fullAddress = `${streetAddress} ${city}, ${state}`;
  return (
    <Item color={color}>
      <Name>{fullName}</Name>
      <Address>
        <div>{streetAddress}</div>
        <div>{`${city}, ${state}`}</div>
        <div>{country}</div>
        <div>{zipCode}</div>
      </Address>
    </Item>
  );
}
