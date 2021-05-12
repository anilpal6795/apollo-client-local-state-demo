import styled, { createGlobalStyle } from 'styled-components';
import { colors, TextField, Button, makeStyles } from '@material-ui/core';

export const useBaseStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexGrow: '1'
    },
    textField: {
        flexGrow: '1',
    },
    chip: {
        margin: '0 8px 8px 0'
    },
    list: {
        backgroundColor: 'white',
        boxShadow: 'lightgrey 1px 1px 10px 4px',
        flexGrow: '1'
    },
    listItem: {
        overflowWrap: 'anywhere'
    }
}));

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin: 0;
    color: #eb7100;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.grey[100]};
    margin: 2rem auto;
    padding: 2rem;
    box-sizing: border-box;
    justify-content: center;
    max-width: 600px;
`;

export const StyledBox = styled.div`
    display: ${props => props.display ?? 'flex'};
    flex-grow: ${props => props.flexGrow ?? '1'};
    flex-direction: ${props => props.flexDirection ?? 'row'};
    flex-wrap: ${props => props.flexWrap ?? 'wrap'};
    box-sizing: border-box;
    margin: 1rem 0;
`;

export const StyledTextField = styled(TextField)`
    flex-grow: 1;
`;

export const StyledButton = styled(Button)`
    margin-left: 1rem;
`;

