import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
	pageWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		flexDirection: 'column',
	},
	messageWrapper: {
		backgroundColor: 'white',
		width: '50rem',
		boxShadow: '2px 1px 8px 2px rgb(0 0 0 / 4%)',
		padding: '4rem',
		borderRadius: '8px',
		display: 'flex',
		justifyContent: 'center',
	},
});
