import Link from "next/link";
import styled from "styled-components";
import { colorMap } from "../utils/colors";
import styles from "./Card.module.css";

const Anchor = styled.a`
  background-color: #fafafa;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #aeaeae;
  border-radius: 10px;
  transition: all 0.3s ease;

  ${({ color }) => `
    border-color: ${colorMap[color].border};
    background-color: ${colorMap[color].background};

    &:hover {
      background-color: ${colorMap[color].hover};
    }
  `};
`;

export function Card({ children, href, onMouseEnter, color, onClick }) {
  const getColorStyles = () => ({
    borderColor: colorMap[color].border,
    backgroundColor: colorMap[color].background,
  });
  return (
    <Link
      href={href}
      className={styles.link}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={getColorStyles()}
    >
      {children}
    </Link>
  );
}
