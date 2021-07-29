import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 0 1rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: #555;
  padding: 1rem 0rem;

  border-bottom: 1px solid #bbb;
}
`;

const BackButton = styled.button`
  color: #777;
  font-size: 1.4rem;
  margin-right: 3rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3f3f3f;
    color: #efefef;
  }
`;

export function Header({ children }) {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <BackButton onClick={() => router.back()}>Back</BackButton>
        {children}
      </HeaderContent>
    </HeaderWrapper>
  );
}
