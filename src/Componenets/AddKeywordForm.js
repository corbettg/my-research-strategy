import React from 'react'
import { Card, Typography, Grid } from 'material-ui'
import { CardContent } from 'material-ui/Card';

const styles = {
    card: {
        margin: 10,
    }
}

export default ({ props }) =>

    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
        <Card style={styles.card}>
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Textbox 1
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </Card>
    </Grid> 
    