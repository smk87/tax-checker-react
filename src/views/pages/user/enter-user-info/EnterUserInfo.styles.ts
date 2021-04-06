import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
	pageWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		flexDirection: 'column',
	},
	form: {
		backgroundColor: 'white',
		width: '30rem',
		boxShadow: '2px 1px 8px 2px rgb(0 0 0 / 4%)',
		padding: '2rem',
		borderRadius: '8px',
	},
	submitButton: {
		width: '10rem',
		padding: '0.75rem 0',
		borderRadius: '8px',
	},
});
