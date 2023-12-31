import { H2 } from '../h2/h2.js';
import styled from 'styled-components';
import { PROP_TYPE } from '../../constants/prop-type.js';

const Div = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 18px;
`;

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	);

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
