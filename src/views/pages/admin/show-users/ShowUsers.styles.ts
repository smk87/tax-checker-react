import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
	pageWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		flexDirection: 'column',
	},
	tableWrapper: {
		backgroundColor: 'white',
		width: '100%',
		boxShadow: '2px 1px 8px 2px rgb(0 0 0 / 4%)',
		padding: '1rem',
		borderRadius: '8px',
		display: 'flex',
		justifyContent: 'center',
	},
});
