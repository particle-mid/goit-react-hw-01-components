import styled from "styled-components";

export const ProfileCard = styled.div`
width: 400px;
height: auto;
display: block;
margin: 0 auto;
border-radius: ${(props) => props.theme.spacing(2)};
box-shadow: ${(props) => props.theme.colors.boxShadow};
`

export const UserInfoWrapper = styled.div`
    text-align: center;
    padding: 40px 0;
    background-color: ${(props) => props.theme.colors.white};
`

export const Avatar = styled.img`
   width: 150px;
   height: 150px;
   display:block;
   margin: 0 auto;
    margin-bottom: ${(props) => props.theme.spacing(9)};
    border-radius: 50%;
    overflow: hidden;
    background: ${(props) => props.theme.colors.white};
    border: 5px solid ${(props) => props.theme.colors.pink};
    box-shadow: ${(props) => props.theme.colors.profileShadow};
`

export const Username = styled.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33;
    margin-bottom: ${(props) => props.theme.spacing(3)};
    color: ${(props) => props.theme.colors.primaryText}; 
`

export const Text = styled.p`
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: ${(props) => props.theme.colors.grey};

    &:not(:last-child) {
        margin-bottom: ${(props) => props.theme.spacing(3)};
    }
`;

export const StatsList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-between;
    border-top: 1px solid ${(props) => props.theme.colors.darkPink};
    background-color: ${(props) => props.theme.colors.pinkBg};
    border-end-start-radius: ${(props) => props.theme.spacing(2)};
	border-end-end-radius: ${(props) => props.theme.spacing(2)};
`;

export const StatsItem = styled.li`
   display:flex;
   align-items: center;
   justify-content: center;
    flex-direction: column;
    width: calc(100% / 3);
    padding: ${(props) => props.theme.spacing(9)} 0;

    &:not(:last-child) {
        border-right: 1px solid ${(props) => props.theme.colors.greOpacity};
    };

`;

export const Label = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 1.33;
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Value = styled.span`
font-size: 18px;
font-weight: 700;
line-height: 1.11;
    color: ${(props) => props.theme.colors.secondaryText};
`;