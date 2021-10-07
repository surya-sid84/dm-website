import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;
	max-height: 60px;

	transition: all 0.1s ease-in-out;
	opacity: 1;
	z-index: 10;
	position: fixed;
	top: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
`;
export const HeaderInnerContainer = styled.div`
	width: 80%;
	height: 100%;
	max-width: 1440px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1090px) {
		justify-content: space-between;
		align-items: center;
	}
	@media (max-width: 920px) {
		width: 95%;
	}
`;
export const LogoContainer = styled.img`
	width: 100px;
	cursor: pointer;
	height: 45px;
`;

export const NavContainer = styled.nav``;

export const NavLink = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;

	li {
		font-size: 1rem;
		font-weight: 500;
		margin: auto 24px;
		cursor: pointer;
	}
`;
