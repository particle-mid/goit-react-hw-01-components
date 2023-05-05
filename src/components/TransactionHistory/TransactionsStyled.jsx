
import styled from "styled-components";

export const Table = styled.table`
    width: 60%;
	margin: 0 auto;
	text-align: center;
	border-radius: 5px;
	background: ${(props) => props.theme.colors.tableBg};
	box-shadow: ${(props) => props.theme.colors.boxShadow};
	& thead th {
		padding: ${(props) => props.theme.spacing(3)};
		font-family: ${(props) => props.theme.fonts.secondary};
		font-size: 18px;
        font-weight: 600;
        line-height: 1.33;
		color: ${(props) => props.theme.colors.white};
		background: ${(props) => props.theme.colors.tableHead};
		text-transform: uppercase;
	}
	& tbody td {
		padding: ${(props) => props.theme.spacing(3)};
		font-size: 14px;
        font-weight: 400;
        line-height: 1.29;
		color: ${(props) => props.theme.colors.secondaryText};
	}
	& tbody tr:nth-child(even) {
		background: ${(props) => props.theme.colors.white};
	}
	& thead th,
	& tbody td {
		border: 1px solid gray;
		width: calc(100% / 3);
	}
`;