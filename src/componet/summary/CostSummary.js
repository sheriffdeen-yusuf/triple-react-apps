import { Paper } from "@material-ui/core"
import { useSummaryContext } from "../../providers/SummaryProvider"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(3),
    },

  
  }));


const CostSummary = () => {
    const {items} = useSummaryContext();
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <h5>All Avaliable items {items.length}</h5>
                <h5>you have {items.length}items in your chart</h5>
            </Paper>
        </div>
    )
}

export default CostSummary