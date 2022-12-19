import Paper  from "@material-ui/core/Paper";
import Grid  from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from "@material-ui/core";
import { useSummaryContext } from "../../providers/SummaryProvider";
import CostSummary from "./CostSummary";
import { useState } from "react";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardWrapper: {
      display: "flex",
      flexWrap: "wrap",
  }, 
  paperSmall: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "tomato",
    margin: "2rem",
    color: "white",
    maxWidth: "200px",
  },

}));



const Summary = (props) => {
    let sum = 0;
    const { items } = useSummaryContext();

    const [product, setProduct] = useState([]);
    
    function addProduct(clicked){
        let foundItem = product.find(p => p.id === clicked.id);
        if(foundItem){
            foundItem.count += 1
            setProduct([
                ...product,
            ])
        }
        else {
            setProduct([
                ...product,
                clicked
            ])
        }
    }

   let costTotal = product.map((item) => item.price * item.count)
    .reduce((a, b) => a + b, 0);


    const classes = useStyles()
    return(
        <div className={classes.root}>
            <h1>Summary Componet</h1>
            <CostSummary/>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper} >
                        All items description in store
                        <div className={classes.cardWrapper}>
                            {items.map((item, index) => {
                                return(
                                    <Paper  className={classes.paperSmall} key={index.toString()}>
                                            <p>Name: {item.product}</p>
                                            <p>Price: {item.price}</p>
                                            <p>Remain: {item.remaining}</p>
                                            <Button onClick={() => {
                                                addProduct({
                                                    id: item.id,
                                                    product: item.product,
                                                    price: item.price,
                                                    count: 1
                                                })
                                            }} variant="contained" color="primary">Add to chart</Button>
                                    </Paper> 
                                )
                            })}
                        </div>
                 
                    </Paper>
                    
                 
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h4>summary card</h4>
                        <hr/>
                        <h4 style={{color: "tomato"}}>Cost Total: {costTotal}</h4>
                        {
                            product.map((p, i) => <h5>{p.product} cost {p.price} x {p.count}</h5>)
                        }
                       
                    </Paper>
                </Grid>
            </Grid>
           
        </div>
    )
}

export default Summary;