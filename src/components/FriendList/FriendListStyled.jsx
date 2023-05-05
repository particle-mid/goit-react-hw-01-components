
import styled from "styled-components";


export const Friends = styled.ul`
    width: calc(100% / 3);
    display: block;
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.spacing(8)};
`;

export const FriendItem = styled.li`
   display: flex;
   align-items: center;
   justify-content: flex-start;
    background-color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.spacing(3)};
    gap: ${(props) => props.theme.spacing(4)};
    border-radius: ${(props) => props.theme.spacing(1)};
    box-shadow: ${(props) => props.theme.colors.boxShadow};
    overflow: hidden;
    &:not(:last-child) {
        margin-bottom: ${(props) => props.theme.spacing(5)};
    }
`;

const Status = styled.span`
	width: 12px;
    height: 12px;
	border-radius: 50%;
	
`;

export const Online = styled(Status)`
	background-color: ${(props) => props.theme.colors.green};
`;

export const Offline = styled(Status)`
	background-color: ${(props) => props.theme.colors.red};
`;

export const Avatar = styled.img`
	border-radius: 10%;
	overflow: hidden;
	background: ${(props) => props.theme.colors.greyBg};
`;

export const UserName = styled.p`
	font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.17;
	color: ${(props) => props.theme.colors.pinkBg};
`;