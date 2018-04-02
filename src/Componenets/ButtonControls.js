import React from 'react'
import { Button, Grid } from 'material-ui'

const styles = {
    button: {
        margin: 10
    }
}

export default ({ updateView }) =>
<Grid container>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
       <Button color="primary" style={styles.button}>Button 1</Button>
       <Button color="primary" style={styles.button}>Button 2</Button>
       <Button color="primary" style={styles.button}>Button 3</Button>
       <Button color="secondary" style={styles.button}>Help</Button>
    </Grid> 
</Grid>