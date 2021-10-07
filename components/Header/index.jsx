import {
	HeaderContainer,
	HeaderInnerContainer,
	LogoContainer,
	NavContainer,
	NavLink,
} from "./styles";
import Link from "next/link";

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderInnerContainer>
				<LogoContainer src={"/images/logo.png"} alt="Digital Manorama" />
				<NavContainer>
					<NavLink>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>

						<li>
							<Link href="/">
								<a>Services</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Contact</a>
							</Link>
						</li>
					</NavLink>
				</NavContainer>
			</HeaderInnerContainer>
		</HeaderContainer>
	);
};

export default Header;
