import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #0f0f0fef;
  box-shadow: 0 2px 10px #00000080;
  backdrop-filter: blur(5px);
  padding: 0 2rem; /* beri padding kiri kanan di container supaya ada jarak dari pinggir layar */
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Hapus max-width dan margin auto supaya full lebar */
`;

export const Brand = styled.h1`
  color: #f5a623;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 5px #000000b3;
  cursor: pointer;
  margin: 0;
  /* Hilangkan padding-left, biar menempel kiri container */
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  /* Hilangkan padding-right supaya menempel kanan container */
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #ddd;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding: 0.3rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #f5a623;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #f5a623;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
